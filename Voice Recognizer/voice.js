var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var textbox = document.getElementById('textbox');

function start(){
    textbox.innertext="";
    recognition.start();

}

var camera = document.getElementById('camera');
Webcam.attach('#camera');

Webcam.set({
    width: 398,
    height: 298,
    image_format: 'png',
    png_quality: 90
})



recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    textbox.innerText = content;
    content = content.toLowerCase();
    content = content.replaceAll(".","");
    textbox.innerText=content;
    if (content == "take my snap"){
        console.log("Taking Your Picture in 5 seconds")
        speak();}
}

function speak(){
    var synth= window.speechSynthesis;
    var say = "Taking Your Picture in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(say);
    synth.speak(utterthis);                                                     
    setTimeout(function(){
        take_selfie();
        save();
    },5000)
}

function take_selfie() {
    Webcam.snap(function(data_uri){
        result.innerHTML='<img id="image" src="'+data_uri+'"/>';
    })
}

function save(){
    var imgURL = document.getElementById('image').src;          
    var link = document.getElementById('link');
    link.href = imgURL;
    link.click();
}
