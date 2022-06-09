// document.addEventListener("click", testFunksjon)


// function testFunksjon() {
//     document.getElementById("test-klasse").innerHTML = "hallo";
//     // console.log("testoutput");
// }


// const trommesett = document.querySelector("drumset")

/*
document.addEventListener("click", (e) => {
    console.log(document.getElementById("drum-1").innerHTML = e)
})
*/

 /*
function doSomething(e) {
    console.log(e.srcElement.id);
    // kan jeg skape en slags dobbelslag med dette?
    document.getElementById(e.srcElement.id).click()
    
} 

document.body.addEventListener("click", doSomething)
*/

// listen for mouse click events and sends the button name to the drum() function
document.body.addEventListener('click', (e) => {
    console.log(e);
    drums(e.target.innerHTML)
    // under is part of testing for different way with using a class of objects 
    // audioFiles.e.play()
    let test1 = e.target.innerHTML
    console.log(audioFiles.test1);
})


// listen for keypress and sends the key name to the drum() function
document.body.addEventListener('keydown', (e) => {
    console.log(e);
    console.log(e.key);
    e.target.style.color = "red"
    drums(e.key)
})    


// takes the input key name and plays corresponding sound
function drums(keys) {
    switch (keys){
        case "q":
            let flam01 = new Audio("audio/CYCdh_K1close_Flam-01.wav")
            flam01.play()
            // console.log(keys);
            break;

        case "w":
            let kick01 = new Audio("audio/CYCdh_K1close_Kick-07.wav")
            kick01.play()
            break;

        case "e":
            let tom01 = new Audio("audio/CYCdh_Kurz01-Tom01.wav");
            tom01.play()
            break;

        case "r":
            let tom02 = new Audio("audio/CYCdh_Kurz01-Tom02.wav");
            tom02.play()
            break;

        case "t":
            let tom03 = new Audio("audio/CYCdh_Kurz01-Tom03.wav");
            tom03.play()
            break;

        case "a":
            let cymbal01 = new Audio("audio/China-Cymbal-Crash-Level-4A-www.fesliyanstudios.com.mp3")
            cymbal01.play()
            break;

        case "s":
            let hiHat01 = new Audio("audio/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3")
            hiHat01.play()
            break;
    }; // end switch
}; // end function


// testing new method
let audioFiles = {
    "q": new Audio("audio/CYCdh_K1close_Flam-01.wav"),
    kick01: new Audio("audio/CYCdh_K1close_Kick-07.wav")
    // test01: "dette er en test"
}

