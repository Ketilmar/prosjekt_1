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


document.body.addEventListener('keypress', (e) => {
    console.log(e);
    console.log(e.key);
    e.target.style.color = "red"
    drums(e.key)
    //if (e.target.nodeName)
    
})

function drums(keys) {
    switch (keys){
        case "q":
            let flam01 = new Audio("audio/CYCdh_K1close_Flam-01.wav")
            flam01.play()
            // console.log(keys);
            break;

        case "w":
            let kick07 = new Audio("audio/CYCdh_K1close_Kick-07.wav")
            kick07.play()
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
    }; // end switch
}; // end function
