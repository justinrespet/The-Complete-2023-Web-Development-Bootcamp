
var drumButts = document.querySelectorAll(".drum")

var sounds = ['sounds/crash.mp3', 'sounds/kick-bass.mp3', 'sounds/snare.mp3', 'sounds/tom-1.mp3',
                'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3']


for (let index = 0; index < drumButts.length; index++) {

    drumButts[index].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        console.log(this)
        
        makeSound(buttonInnerHTML)
    })
    
}

document.addEventListener("keydown", function(event){

    
    makeSound(event.key);
    

})


function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio(sounds[0])
            crash.play()
            break;
        case "a":
            var kick = new Audio(sounds[1])
            kick.play()
            break;
        case "s":
            var snare = new Audio(sounds[2])
            snare.play()
            break;
        case "d":
            var tom1 = new Audio(sounds[3])
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio(sounds[4])
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio(sounds[5])
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio(sounds[6])
            tom4.play()
            break;
    
        default:
            break;
    }

}

