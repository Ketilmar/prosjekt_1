// document.addEventListener("click", testFunksjon)


// function testFunksjon() {
//     document.getElementById("test-klasse").innerHTML = "hallo";
//     // console.log("testoutput");
// }


const trommesett = document.querySelector("drumset")

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


document.body.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target.id);
    e.target.style.color = "red"
    //if (e.target.nodeName)
    
})
