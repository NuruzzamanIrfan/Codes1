var my_camera = document.getElementById('my_camera');
Webcam.attach('#camera');


Webcam.set({
    width: 398,
    height: 298,
    image_format: 'png',
    png_quality: 90
})

var result = document.getElementById('result');
var obj = document.getElementById('obj');
var acc = document.getElementById('acc');

function snapshot() {
    Webcam.snap(function(data_uri) {
        result.innerHTML='<img src="'+data_uri+'"/>';
    })
}

let imageModelURL = 'https://teachablemachine.withgoogle.com/models/FhPfPCnIh/';

function modelload(){
    console.log("Model loaded");
}

classifier=m15.imageClassifier (imageModelURL+'model.json',modelload);

function gotResult(error, result){
    if (error) {
        console.log("error");
    }   
    else{
        console.log(result);
        var label=results[0].label;
        obj.innerText="Object : "+label;
        var c=results[0].confidance.toFixed(2)*100; 
        acc.innerText="Accurecy : "+c+"%";
    }
}
