var canvas = document.getElementById("canvas");
var drawingColor = "white";
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
    let arr = ['red', 'blue', 'green', 'yellow', 'black', 'blueviolet'];
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
document.getElementById("erase").addEventListener('click', erase);
function erase() {
    
    canvas.addEventListener('mousemove', eraseDots);
}
// function eraseDots(e) {
//     if (mouseDown) {
//         canvas.removeEventListener('mousemove', makeDot);
//         var myDots = document.createElement("span");
//         myDots.className += 'erase';
//         canvas.appendChild(myDots);
//         myDots.style.top = e.pageY - e.target.offsetTop + "px";
//         myDots.style.left = e.pageX - e.target.offsetLeft + "px";
//     }
//     else {
//         canvas.addEventListener('mousemove', makeDot);
//         canvas.removeEventListener('mousemove', eraseDots);
//     }
// }