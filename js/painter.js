var canvas = document.getElementById("canvas");
var drawingColor ="white";

function changeDrawingColor(eventObject) {
    var element = eventObject;
    document.getElementById('canvas').style.color = element;
    console.log(`i changed the color to ${element} !`);
    console.log(element);
    drawingColor = element;
}


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
document.getElementById('canvas').addEventListener('mousedown',makeDot);

function makeDot(e) {
    
    var dot = document.createElement("span");
    dot.className += 'smallRadius';
    canvas.appendChild(dot);
    dot.style.top = e.pageY-e.target.offsetTop +"px";
    dot.style.left =e.pageX - e.target.offsetLeft +"px";
    dot.style.backgroundColor = drawingColor;
    console.log(dot);

    
    
}