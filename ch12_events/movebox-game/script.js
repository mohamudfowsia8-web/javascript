const box = document.getElementById("box");

let positionX = 200;
let positionY = 200;
const speed = 20;



document.addEventListener("keydown", function(event) {
  if(Event.key=== "ArrowUp") {
        positionY -= speed;
  }

  else if (event.key ==="ArrowDown") {
    positionY += speed;
    box.style.background = "blue";
  }

 else if (event.key ==="ArrowLeft") {
    positionX -= speed;
    
  }

 else if (event.keys ==="ArrowRight") {
    positionX += speed;
    
  }




  box.style.left = positionX + "px";
  box.style.top = positionY + "px";
// alert("you pressed" + event.code)

  
});

