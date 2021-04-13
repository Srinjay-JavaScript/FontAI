noseX = 0;
noseY = 0;
var difference;
var nameUser = "Your Name";
function preload(){

}
function setup(){
canvas = createCanvas(475, 375);
videoCanvas = createCapture(VIDEO);
canvas.position(1000, 150);
videoCanvas.position(10, 150);
videoCanvas.size(500,500);
posenet = ml5.poseNet(videoCanvas, success);
posenet.on('pose', result);
}
function draw(){
    background("white");
    fill("black");
    textSize(difference);
    textStyle(BOLD);
    text(nameUser, noseX, noseY);
    fill(0, 102, 153);
    
    
}
function success(){
    console.log("Posenet is now ready.");
}
function result(result){
    if (result.length > 0){
    //    console.log(result);
       noseX = result[0].pose.nose.x;
       noseY = result[0].pose.nose.y;
       leftWristX = result[0].pose.leftWrist.x;
       rightWristX = result[0].pose.rightWrist.x;
       difference = leftWristX - rightWristX;
       document.getElementById("widthHeight").innerHTML = difference.toFixed(1);
       if ((noseX >0) && (noseY > 0)){
       console.log( "X: " + noseX + " Y: " + noseY);
       }
    }
    else{
        console.log(" ERROR: Make note that there is someone infront of the camera. ");
        noseX = 0;
        noseY= 0;
    }

}

function variablize()
{
    nameUser = document.getElementById("nameUser").value;
}