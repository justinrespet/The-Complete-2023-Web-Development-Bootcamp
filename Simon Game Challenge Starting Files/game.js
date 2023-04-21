
// variables to contain game and user sequences
var gamePattern = []
var userClickedPattern = []
var level = 0

// variable to indicate if user has pressed key
var gameBegunFlag = false


var buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence(){
    level++
    var randomNumber =  Math.floor( Math.random() * 4 )
    return buttonColours[randomNumber]
}



// Detect keypress to begin game
$(document).keydown(function(event){

    if(!gameBegunFlag)
    {
        $("h1").text("level "+level)
        gamePattern.push(nextSequence())
        simonSays()
        gameBegunFlag = true
    }
    
    
})

// event handler to record user actions
$(".btn").click(function() {
    userClickedPattern.push(this.id)
    
    animatePress(this.id)
    playSound(this.id)
})

// check user input, determine round win conditions
function gameLogic(simonSequence, userSequence){

    for (let index = 0; index < array.simonSequence; index++) {
        
    }

}

// Display pattern to follow
function simonSays(){

    for (let index = 0; index < gamePattern.length; index++) {
    
        playSound(gamePattern[index])
        animatePress(gamePattern[index])
    
    }
}

function animatePress(colour){
    $("#"+colour).addClass("pressed")
    setTimeout(function(){
        $("#"+colour).removeClass("pressed")
    }, 100)
}

function playSound(colour){

    var colourSound = new Audio("sounds/"+colour+".mp3")
    colourSound.play()
}

