let video;
let poseNet;
let sX = 325;
let sY = 240;
let fX = 200;
let fY = 150;
let dirX = 2;
let dirY = 0;
let score = 0;
let size = 20;

function setup() {
    canvas = createCanvas(650, 480);
	canvas.center();
    background("white");
	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotResult);
}

function modelLoaded() {
	console.log('model loaded');
}

function gotResult(poses) {
	if (poses.length > 0) {
		x = poses[0].pose.keypoints[0].position.x;
		y = poses[0].pose.keypoints[0].position.y;
        
        if (y < 240) { 
            dirX = 0;
            dirY = -2;
        }
        if (y > 240) { 
            dirX = 0;
            dirY = 2;
        }

        if (x < 325) { 
            dirX = -2;
            dirY = 0;
        }
        
        if (x > 325) {
            dirX = 2;
            dirY = 0;
        }
            }
        }

function draw() {
	background("white");
	moveSnake();
	drawSnake();
	drawFood();
	drawScore();
	if (checkCollision()) {
		resetGame();
	}
}

function moveSnake() {
	sx += dirX;
	sy += dirY;
	var distance = dist(sX, sY, fX, fY);
	if (distance < size) {
		score += 10;
		changeFoodPosition();
	}
}

function drawSnake() {
	stroke("green");
	fill("green");
	rect(sx, sy, size, size);
}

function drawFood() {
	stroke("red");
	fill("red");
	ellipse(fx, fy, size, size);
}

function drawScore() {
    fill("black");
	textSize(25);
	text("Score: " + score, 325, 25);
}

function changeFoodPosition() {
	fx = (random(10)*width);
	fy = (random(30)*width);
}

function checkCollision() {
	return (sX < 0 || sY < 0 || sX > width || sY > height);
}

function resetGame() {
	alert("Game Over! Your score: " + score);
	sX = 325;
	sY = 240;
	fX = 200;
    fY = 150;
	dirX = 2;
	dirY = 0;
	score = 0;
	size = 20;
}