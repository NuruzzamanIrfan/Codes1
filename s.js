var camera =document.getElementById('camera'); 
Webcam.attach('#camera'); 

 Webcam.set({
 	width: 400,
 	height: 400, 
 	image_format: 'png',
 	png_quality:90
 }) 

var result=document.getElementById('result');
var ob=document.getElementById('ob');
var ac=document.getElementById('ac');

function snap() {
 	Webcam.snap(function(data_uri){ 
 		result.innerHTML='<img id="image" src="'+data_uri+'" />'
 	})
}
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/nJZJrYKg1/';

function modelload(){
	console.log("Model loaded");
}

classifier = ml5.imageClassifier(imageModelURL + 'model.json',modelload);

function gotresult(error,result){
	if (error){
		console.log("error");
	}
	else{
		console.log(result);
		var label = result[0].label;
		ob.innerText="Objext :"+label;
		var c=result[0].confidence.toFixed(2)*100;
		ob.innerText="Object : "+label;
		ac.innerText="Accurecy : "+c+"%";
	}
}


function check(){
	var image=document.getElementById("image");
	classifier.classify(image,gotresult);
}