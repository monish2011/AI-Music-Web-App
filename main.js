music1="";
music2="";
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
 
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}

function preload(){
    music1= loadSound("harry_potter.mp3");
    music2 = loadSound("peter_pan.mp3");
}
