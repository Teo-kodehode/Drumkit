let body = document.querySelector("body")

let kick = new Audio ("sounds/kick.wav")
let snare = new Audio ("sounds/snare.wav")
let hiHat = new Audio ("sounds/hihat.wav")
let tink = new Audio ("sounds/tink.wav")
let openHat = new Audio ("sounds/openhat.wav")
let ride = new Audio ("sounds/ride.wav")
let tom = new Audio ("sounds/tom.wav")
let clap = new Audio ("sounds/clap.wav")


let kickbtn = document.getElementById("")




body.addEventListener('keydown', (event) => {
    if (event.key == "q"){
        hiHat.currentTime = 0
        hiHat.play()
    }
    if (event.key == " "){
        kick.currentTime = 0
        kick.play()
    }
    if (event.key == "o"){
        clap.currentTime = 0
        clap.play()
    }
    if (event.key == "i"){
        openHat.currentTime = 0
        openHat.play()
    }
    if (event.key == "u"){
        snare.currentTime = 0
        snare.play()
    }
    if (event.key == "r"){
        ride.currentTime = 0
        ride.play()
    }
    if (event.key == "e"){
        tink.currentTime = 0
        tink.play()
    }
    if (event.key == "w"){
        tom.currentTime = 0
        tom.play()
    }
})