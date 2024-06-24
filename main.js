music1="";
music2="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist =0;
song_status = "";
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
 
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,500,400);
    fill("#FF0000");
    stroke("#FF0000");
    song_status=music1.isPlaying();
    if(scoreLeftWrist > 0.2){
        circle(lefWristX,leftWristY, 20);
        music2.stop();
        
    }
    if(song_status == false){
        music1.play();
        document.getElementById("song_name").innerHTML = "Harry Potter Theme Song";
    }
}

function preload(){
    music1= loadSound("harry_potter.mp3");
    music2 = loadSound("peter_pan.mp3");
    
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        scoreLeftWrist= results[0].pose.keypoints[9].score;
    
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

}}

function modelLoaded(){
    console.log("PoseNet has been intialized!");
}