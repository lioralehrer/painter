var canvas = document.getElementById("canvas");
var drawingColor ="white";
var brush = "mediumBrush";
function changeBrush(element){
    console.log(element);
    brush = element;

}

function changeDrawingColor(eventObject) {
    var element = eventObject;
    document.getElementById('canvas').style.color = element;
    console.log(`i changed the color to ${element} !`);
    console.log(element);
    drawingColor = element;
}
function startBrush(){
    let arr = ['smallBrush','mediumBrush','giantBrush','miniBrush'];
    arr.forEach(element => {
        document.getElementById(element).addEventListener('click', function(){changeBrush(element)});
    });

}
startBrush();

// init the color
function startTheColors() {
    let arr = ['red', 'blue', 'green', 'yellow', 'black', 'blueviolet'];
    arr.forEach(element => {
        document.getElementById(element).addEventListener('click', function () { changeDrawingColor(element) });
        console.log(element);
    });
}
startTheColors();
// draw in the canvas

  canvas.addEventListener('mousedown', makeDot);
//   canvas.addEventListener('mousedown', setInterval(makeDot),100);
document.getElementById('canvas').addEventListener('mouseup',clearInterval(makeDot));

function makeDot(e) {
    
    var dot = document.createElement("span");
    dot.className += brush;
    canvas.appendChild(dot);
    dot.style.top = e.pageY-e.target.offsetTop +"px";
    dot.style.left =e.pageX - e.target.offsetLeft +"px";
    dot.style.backgroundColor = drawingColor;
    console.log(dot);
     
  
}

// clear canvas:
 document.getElementById("clear").addEventListener('click', clearCanvas);
 function clearCanvas(){
     location.reload();
 }