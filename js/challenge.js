let counterOn=true
let currentNumber=0
const btns=document.querySelector("#container");
btns.addEventListener("click",event =>{
  if(event.target.id==="plus"){
    currentNumber= currentNumber+1
  }else if(event.target.id==="minus"){
    currentNumber= currentNumber-1
  }else if(event.target.id==="pause"){
    togglePaused()
  }
}
)
function togglePaused(){
  counterOn=false
  document.querySelectorAll("button").forEach(button=>{
    button.disabled=true
  }

  )
}

const timer=document.querySelector("h1#counter")
setInterval(()=>{
  if (counterOn){
 }
  currentNumber= currentNumber +1
  timer.textContent= currentNumber
},1000)
