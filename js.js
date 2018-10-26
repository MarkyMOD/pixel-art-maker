document.addEventListener("DOMContentLoaded",function(){

  let canvas=document.querySelector(".grid");
  let rula=document.querySelector(".iIsRula");
  let erase=document.querySelector(".eraser")
  for(let i=0;i<6200;i++){

    let something=document.createElement("div");

    something.style.width="1%";
    something.style.paddingBottom="1%";
    something.style.backgroundColor="white";
    something.style.border="solid";
    something.style.borderWidth="thin";
    something.style.borderColor="magenta";

    something.style.float="left";
    canvas.appendChild(something);
  }

  let makeColor;

  rula.addEventListener("click",function(){
    let result="#";
    let pool="0123456789abcdef";

    for(let i=0;i<6;i++){
      let test=Math.round(Math.random()*(pool.length-1));
      result+=pool[test];

      }
      makeColor=result;
  });

  let paint=false;

  canvas.addEventListener("mousedown",function(event){
    paint=true
    event.target.style.backgroundColor=makeColor;
  });

  canvas.addEventListener("mouseup",function(event){
    paint=false
    event.target.style.backgroundColor=makeColor;
  });

  canvas.addEventListener("mousemove",function(event){
    if(paint===true){
      event.target.style.backgroundColor=makeColor;
    }
  });


  erase.addEventListener("click",function(event){
    makeColor="white";
  })


});
