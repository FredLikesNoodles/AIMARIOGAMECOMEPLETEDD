
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800, 400)
	video.parent("game_controller")
	poseNET = ml5.poseNet(video, modelLoaded)
	poseNET.on("pose", gotPoses)
}

function modelLoaded(){
	console.log("Model has been initialized")
}
function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

	}

}


function draw() {
	game()
}









