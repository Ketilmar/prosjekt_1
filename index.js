

 /*
function doSomething(e) {
    console.log(e.srcElement.id);
    // dobbelslag?
    document.getElementById(e.srcElement.id).click()
    
} 

document.body.addEventListener("click", doSomething)
*/

/////////////////////////////
////////// Drumkit //////////
/////////////////////////////

// this is as far as i got. I know the code can be more efficient, but not exactly how to do it.
// Will revisit at a later stage.



// listen for click events, sends the button name to the drum() function
document.body.addEventListener('click', (e) => {
    // console.log(e);
    drums(e.target.innerText)
})


// listen for keydown event. Sends the key name to the drum() function
// choosing to use 'key' to specify capital letter or not
document.body.addEventListener('keydown', (e) => {
    // console.log(e);
    drums(e.key)
})    

// querySelectors searching for first html element match. Using this for css "animation" 
const flam01Cont = document.querySelector("#flam")
const kick01Cont = document.querySelector("#kick")
const tom01Cont = document.querySelector("#tom1")
const tom02Cont = document.querySelector("#tom2")
const tom03Cont = document.querySelector("#tom3")
const cymbal01Cont = document.querySelector("#cymbal01")
const hihat01Cont = document.querySelector("#hihat01")

// Takes the input key name and plays corresponding sound.
// Making the switch as a function, so it can be called from different eventlisteners
function drums(keys) {
    switch (keys){
        case "q":
            let flam01 = new Audio("audio/CYCdh_K1close_Flam-01.wav")
            flam01.play()
                // Adding 'playing' class to active button, so css 'animation' activates. Timeout after 100 ms.
            flam01Cont.classList.add("playing")
            setTimeout(() => flam01Cont.classList.remove("playing"), 100)
            break;

        case "w":
            let kick01 = new Audio("audio/CYCdh_K1close_Kick-07.wav")
            kick01.play()
            kick01Cont.classList.add("playing")
            setTimeout(() => kick01Cont.classList.remove("playing"), 100)
            break;

        case "e":
            let tom01 = new Audio("audio/CYCdh_Kurz01-Tom01.wav");
            tom01.play()
            tom01Cont.classList.add("playing")
            setTimeout(() => tom01Cont.classList.remove("playing"), 100)
            break;

        case "r":
            let tom02 = new Audio("audio/CYCdh_Kurz01-Tom02.wav");
            tom02.play()
            tom02Cont.classList.add("playing")
            setTimeout(() => tom02Cont.classList.remove("playing"), 100)
            break;

        case "t":
            let tom03 = new Audio("audio/CYCdh_Kurz01-Tom03.wav");
            tom03.play()
            tom03Cont.classList.add("playing")
            setTimeout(() => tom03Cont.classList.remove("playing"), 100)
            break;

        case "a":
            let cymbal01 = new Audio("audio/China-Cymbal-Crash-Level-4A-www.fesliyanstudios.com.mp3")
            cymbal01.play()
            cymbal01Cont.classList.add("playing")
            setTimeout(() => cymbal01Cont.classList.remove("playing"), 100)
            break;

        case "s":
            let hiHat01 = new Audio("audio/Hi-Hat-Closed-Hit-B1-www.fesliyanstudios.com.mp3")
            hiHat01.play()
            hihat01Cont.classList.add("playing")
            setTimeout(() => hihat01Cont.classList.remove("playing"), 100)
            break;
    }; // end switch
}; // end function



