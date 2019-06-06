var canvas = document.getElementById("canvas");
var drawingColor = "black";
var brush = "mediumBrush";
function changeBrush(element) {
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
function startBrush() {
    let arr = ['smallBrush', 'mediumBrush', 'giantBrush', 'miniBrush'];
    arr.forEach(element => {
        document.getElementById(element).addEventListener('click', function () { changeBrush(element) });
    });
}
startBrush();
function startTheColors() {
    let arr = ['red', 'blue', 'green', 'yellow', 'black', 'blueviolet','white'];
    arr.forEach(element => {
        document.getElementById(element).addEventListener('click', function () { changeDrawingColor(element) });
        console.log(element);
    });
}
startTheColors();
canvas.addEventListener('mousemove', makeDot);
var mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}

function makeDot(e) {
    if (mouseDown) {
        var dot = document.createElement("span");
        dot.className += brush;
        canvas.appendChild(dot);
        dot.style.top = e.pageY - e.target.offsetTop + "px";
        dot.style.left = e.pageX - e.target.offsetLeft + "px";
        dot.style.backgroundColor = drawingColor;
        console.log(dot);
    }
}
document.getElementById("clear").addEventListener('click', clearCanvas);
function clearCanvas() {
    location.reload();
}

