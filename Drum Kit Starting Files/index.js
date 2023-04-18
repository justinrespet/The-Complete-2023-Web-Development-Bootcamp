
var drumButts = document.querySelectorAll(".drum")//.addEventListener("click", handleClick)

for (let b = 0; b < drumButts.length; b++)
{
    drumButts[b].addEventListener("click", function(){

        var audio = new Audio('sounds/crash.mp3')

        drumButts[0].addEventListener("click", audio.play())

    })
}



