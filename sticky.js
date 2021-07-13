let sticky = document.querySelector("#notes");
sticky.addEventListener("click" , addsticky);

function addsticky() {
    let stickydiv = document.createElement("div");
    stickydiv.classList.add("sticky");
    stickydiv.innerHTML = ` <div class="stick-header">
    <div class="minimize"></div>
    <div class="close"></div>
    </div>
    <div class = "sticky-content" contenteditable="true">
    </div>
</div>`;
        let minimize = stickydiv.querySelector(".minimize");
        let close = stickydiv.querySelector(".close");
        let stickyContent = stickydiv.querySelector(".sticky-content");

        minimize.addEventListener("click", function () {
        stickyContent.style.display == "none"
      ? (stickyContent.style.display = "block")
      : (stickyContent.style.display = "none");
  });

  close.addEventListener("click", function () {
    stickydiv.remove();
  });

  let stickyHeader = stickydiv.querySelector(".stick-header");
    let stickyHold = false;
    let initialX;
    let initialY;

    stickyHeader.addEventListener("mousedown" , function(e){
        stickyHold = true;
        initialX = e.clientX;
        initialY = e.clientY;

    });
    stickyHeader.addEventListener("mousemove" , function(e){
        if(stickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
      
            let dx = finalX - initialX;
            let dy = finalY - initialY;
      
            let {top , left} = stickydiv.getBoundingClientRect();
            //   sticky => top + dy
            //  sticky => left + dx
            stickydiv.style.top = top + dy + "px";
            stickydiv.style.left = left +dx + "px";
      
            initialX = finalX;
            initialY = finalY;
        }


        // let finalX = e.clientX;
        // let finalY =e.clientY;
        // let dx = finalX - initialX;
        // let dy = finalY - finalY;
        // let {top , left} = stickydiv.getBoundingClientRect();
        // stickydiv.style.top = top + dy + "px";
        // stickydiv.style.left = left + dx + "px";


        // initialX = finalX;
        // initialY = finalY;

      
    });
    stickyHeader.addEventListener("mouseup" , function(e){
        stickyHold = false;
    });
    



        document.body.append(stickydiv);

};
