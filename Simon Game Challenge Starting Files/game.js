
// variables to contain game and user sequences
var gamePattern = []
var userClickedPattern = []

// variable to indicate if user has pressed key
var gameBegunFlag = false


var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
    var randomNumber =  Math.floor( Math.random() * 4 )
    return buttonColours[randomNumber]
}

gamePattern.push(nextSequence())

// Detect keypress to begin game
$(document).keydown(function(event){

    if(!gameBegunFlag)
    {
        simonSays()
        gameBegunFlag = true
    }
    
    
})

// event handler to record user actions
$(".btn").click(function() {
    userClickedPattern.push(this.id)
    $("#"+this.id).fadeOut(50).fadeIn(50)
    playSound(this.id)
})

// Display pattern to follow
function simonSays(){

    for (let index = 0; index < gamePattern.length; index++) {
    
        playSound(gamePattern[index])
        $("#"+gamePattern[index]).fadeOut(50).fadeIn(50)
    
    }
}

function playSound(colour){

    var colourSound = new Audio("sounds/"+colour+".mp3")
    colourSound.play()
}

