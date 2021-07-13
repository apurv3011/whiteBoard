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
let lineDB = [];
let line = [];
let redolineDB = [];
let isPendown = false;
canvas.addEventListener("mousedown" , function(e){
// let {clientX , clientY} = e;

if(redolineDB.length)
{
    redolineDB = [];
}
    let x = e.clientX;
    let y = e.clientY - 122;
    isPendown = true;
    ctx.beginPath();
    ctx.moveTo(x , y);

    let pointObj = {
        x: x,
        y : y,
        type : "md",
    };
    console.log("inside mouse down");

    line.push(pointObj);
});

canvas.addEventListener("mousemove" , function(e){
    // let {clientX , clientY} = e;/
    
   if(isPendown){
    let x = e.clientX;
    let y = e.clientY - 122;
       ctx.lineTo(x , y);
       ctx.stroke();
   
   let pointObj = {
    x: x,
    y : y,
    type :"mm",
};
// console.log("inside mouse move");
    line.push(pointObj);

   }



});

canvas.addEventListener("mouseup" , function(e){
    // let {clientX , clientY} = e;
    isPendown = false;
    lineDB.push(line);
    line = [];
    console.log(lineDB);
});