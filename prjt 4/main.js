const btnElm = document.querySelector(".btn")

btnElm.addEventListener("mouseover", (event)=>{
   const y =  event.pageY - btnElm.offsetTop;
   const x = event.pageX - btnElm.offsetLeft
   
   btnElm.style.setProperty("--xPos", x + "px")
   btnElm.style.setProperty("--yPos", y + "px")

})