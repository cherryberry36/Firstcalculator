let numberButtons=document.getElementById("numerals")
let equalbutton=document.getElementById("equal")
let clearonebutton=document.getElementById("clearone")
let clearallbutton=document.getElementById("clearall")
let sum=document.getElementById("displayresult")


document.addEventListener("click", getInput)

function getInput(e){
    if(e.target.id === "numerals"){
        sum.innerHTML += e.target.value
    }
}
document.addEventListener("click", calculator)

function calculator(e){
    if(e.target.id === "equal"){
        sum.innerHTML = eval(sum.innerHTML += e.target.value)
    }
}
 document.addEventListener("click", clearnum)

 function clearnum(e){
     if(e.target.id === "clearone"){
        sum.innerHTML = (sum.innerHTML += e.target.value).slice(0,-1)
     }
 }

document.addEventListener("click", clear)

 function clear(e){
     if(e.target.id === "clearall"){
        sum.innerHTML = "0" 
 }
}