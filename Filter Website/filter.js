let video;
let poseNet;
let eyeX = 0;
let eyeY = 0;

function modelload(){
    console.log('Model Is Readyy!!');
}

function preload(){
    filter = loadImage('https://i.postimg.cc/pX9dTvTD/R.png');
}

function setup(){
    var canvas = createCanvas(600, 400);
    canvas.parent("myCanvas");
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelload);
    poseNet.on('pose',gotPose);
  }
 
function gotPose(poses){
    if (poses.length>0){
       eyeX = poses[0].pose.keypoints[1].position.x-180;
       eyeY = poses[0].pose.keypoints[1].position.y-50;
    }
  }

function draw() {
    image(video, 0, 0);
    image(filter,eyeX, eyeY, 300,100);
    
}


function snap(){
    save('MySelfie.png');
}