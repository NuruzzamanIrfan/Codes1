var speech = window.webkitSpeechRecognition;
var recognition = new speech();
let canvas;
let text;

function start() {
    text = document.getElementById("text");
    text.innerText = "System is Listening";
    recognition.start();
}

function setup() {
    canvas = createCanvas(900, 600);
    canvas.center();
    background("white");
}

recognition.onresult = function(event) {
    console.log(shape);
    var shape = event.results[0][0].transcript;
    shape = shape.toLowerCase();
    shape = shape.replaceAll('.', '');
    var text = document.getElementById("text");
    text.innerText = shape+ " is Drawn";
    

    if (shape == "circle") {
        fill('aqua');
        circle(450, 300, 300);
        
    }

    else if (shape == "square") {
        fill('aqua');
        square(450, 300, 300);
    } 
    else if (shape == "rectangle") {  
        fill('aqua');
        rect(450, 300, 300, 150);
    } 
    else if (shape == "triangle") {
        fill('aqua');
        triangle(450, 200, 600, 500, 300, 500);
    }
    else if (shape == "line") {
        fill('aqua');
        line(450, 300, 500, 500);
    }
    else if (shape == "ellipse") {
        fill('aqua');
        ellipse(450, 300, 400, 200);
    }
    else if (shape == "quadrilateral") {
        fill('aqua');
        quad(400, 250, 350, 550, 550, 550, 600, 250);
    }
    else {
        text.innerText = "Please Speak Again";
    }
        
}