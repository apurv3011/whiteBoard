let undo = document.querySelector('#undo');
let redo = document.querySelector("#redo");
undo.addEventListener("click" , undoFun);
redo.addEventListener("click" , redoFun);

function undoFun(){

    //    if(lineDB.length) {
           let undoline =  lineDB.pop();
           redolineDB.push(undoline);
            ctx.clearRect(0 , 0 , canvas.width , canvas.height);
            drawlinefromDB();
    // }
};

function redoFun() {
    if(redolineDB.length){
        let redoline = redolineDB.pop();
        for(let i = 0; i < redoline.length;i++){
            let pointObj = redoline[i];
            if(pointObj.type == 'md'){
                ctx.beginPath();
                ctx.moveTo(pointObj.x , pointObj.y);
            }else{
                ctx.lineTo(pointObj.x , pointObj.y);
                ctx.stroke();
            }
    
        }
    
    
        lineDB.push(redoline);
    }
   
    
};

function drawlinefromDB() {
    // let curLineW = ctx.lineWidth;
    for(let i = 0; i < lineDB.length;i++){
        let line = lineDB[i];

        for(let j = 0 ; j < line.length;j++){
            let pointobj = line[j];

            if(pointobj.type == "md"){
                ctx.beginPath();
                ctx.moveTo(pointobj.x , pointobj.y);
            }else{
                ctx.lineTo(pointobj.x , pointobj.y);

                // console.log("Apurb");
                ctx.stroke();
            }
        }
        // console.log("Apurb");
    }
    
}

// function drawlinefromDB() {
//     // let currentLineWidth = ctx.lineWidth;
//     // let currentStrokeStyle = ctx.strokeStyle;
  
//     for (let i = 0; i < lineDB.length; i++) {
//       let line = lineDB[i];
//       for (let i = 0; i < line.length; i++) {
//         let pointObject = line[i];
//         if (pointObject.type == "md") {
//           ctx.lineWidth = pointObject.lineWidth;
//           ctx.strokeStyle = pointObject.strokeStyle;
//           ctx.beginPath();
//           ctx.moveTo(pointObject.x, pointObject.y);
//         } else {
//           ctx.lineTo(pointObject.x, pointObject.y);
//           ctx.stroke();
//         }
//       }
//     }
  
//     // ctx.lineWidth = currentLineWidth;
//     // ctx.strokeStyle = currentStrokeStyle;
//   }