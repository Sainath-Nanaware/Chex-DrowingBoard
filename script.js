
const boxes=document.querySelectorAll(".box")
const colorInput = document.getElementById("colorInput");
const eraseButton = document.getElementById("eraseBtn");
const clearButton = document.getElementById("clearBtn");
let canDraw=false;
let color="green"

document.addEventListener("mousedown",()=>{
    canDraw=true
})
document.addEventListener("mouseup", () => {
  canDraw = false;
});

for (let i=0;i<2500;i++){
    boxes[i].addEventListener("mouseover",()=>{
        if(canDraw==true){
        boxes[i].style.backgroundColor = color;
        }
    })
}

// change color
colorInput.addEventListener("click",()=>{
    color = colorInput.value;
})

//Erase functionality
eraseButton.addEventListener("click",()=>{
    color="white"    
})

//clear screen
clearButton.addEventListener("click",()=>{
    // console.log("hii")
    for (let i = 0; i < 2500; i++) {
          boxes[i].style.backgroundColor = "white";
    }
})

