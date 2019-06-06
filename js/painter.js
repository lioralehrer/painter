

//  works like a dream
function changeDrawingColor(eventObject){
    var element = eventObject;
    document.getElementById('canvas').style.color = element;
    console.log(`i changed the color to ${element} !`);
    console.log(element); 
}


// I love this function .... :)
function startTheColors(){
    let arr =['red','blue','green','yellow','black','blueviolet'];
    arr.forEach(element => {
        document.getElementById(element).addEventListener('click', function(){changeDrawingColor(element)}  );
        console.log(element);
    });
}
startTheColors();
