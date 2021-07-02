let canvas = document.querySelector("#canvas");

// canvas drawing gets erased on window resize ???
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth;

window.addEventListener("resize" ,function (e) {
    canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth;
});
// a context object which provides fun for 2d drawing

// console.log(canvas);
let ctx = canvas.getContext("2d");
let isPendown = false;
canvas.addEventListener("mousedown" , function(e){
// let {clientX , clientY} = e;
    let x = e.clientX;
    let y = e.clientY - 122;
    isPendown = true;
    ctx.beginPath();
    ctx.moveTo(x , y);
});

canvas.addEventListener("mousemove" , function(e){
    // let {clientX , clientY} = e;/
    let x = e.clientX;
    let y = e.clientY - 122;
   if(isPendown){
       ctx.lineTo(x , y);
       ctx.stroke();
   }

});

canvas.addEventListener("mouseup" , function(e){
    // let {clientX , clientY} = e;
    isPendown = false;
});