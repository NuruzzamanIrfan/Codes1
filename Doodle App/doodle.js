let canvas;
let classify;

function setup(){
  var canvas = createCanvas(580, 350);
  canvas.center();
}

function draw(){
  stroke(document.getElementById("colorSelector").value);
  strokeWeight(document.getElementById("strokeSelector").value);
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function clearCanvas(){
  background('White');
}

function classifyCanvas(){
  if (classifier){
    classifier.classify(canvas, gotResult);
  } 
  else{
    console.log('Classifier is not loaded yet');
  }
}
function gotResult(results){
  console.log(results);
  var obj = document.getElementById('obj');
  var acc = document.getElementById('acc');
  label = results[0].label;
  con = (results[0].confidence*100).toFixed(1);
  obj.innerText = "THis is :"+label;
  acc.innerText = "Accuracy :"+con+"%";
 
}

