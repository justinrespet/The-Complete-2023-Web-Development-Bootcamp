
// variables to contain game and user sequences
var gamePattern = []
var userClickedPattern = []
var level = 0

// variable to indicate if user has pressed key
var gameBegunFlag = false

// colour options
var buttonColours = ["red", "blue", "green", "yellow"]

// generates next colour in game sequence
function nextSequence(){
    level++
    $("h1").text("level "+level)
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

    if (gameBegunFlag){
        userClickedPattern.push(this.id)
    }
    animatePress(this.id)
    playSound(this.id)

    // check conditions when pattern lengths equal
    if(userClickedPattern.length == gamePattern.length )
    {
        // if true, continue, if not, lose
        if(gameLogic(gamePattern, userClickedPattern))
        {
            setTimeout(function(){
                userClickedPattern = []
                gamePattern.push(nextSequence())
                simonSays()
            }, 500)
            
        }
        else
        {
            $("h1").text("You LOSE")
            var overSound = new Audio("sounds/wrong.mp3")
            overSound.play()
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            }, 200)

            setTimeout(function(){
                gameOver()
            }, 2000)
        }
    }
})

// game over 
function gameOver(){

    

    $("h1").text("Press A Key to Start")
    level = 0
    gamePattern = []
    userClickedPattern = []
    gameBegunFlag = false
}

// check user input, determine round win conditions
function gameLogic(simonSequence, userSequence){

    for (let index = 0; index < userSequence.length; index++) {
        if (simonSequence[index] != userSequence[index])
        {
            return false
        }
    }
    
    return true
}

// Display pattern to follow
function simonSays(){

    
    playSound(gamePattern.at(-1))
    animatePress(gamePattern.at(-1))
    console.log(gamePattern)
    console.log(userClickedPattern)
    
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

