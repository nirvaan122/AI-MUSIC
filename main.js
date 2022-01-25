song1="";
song2="";
leftx=0;
rightx=0;
lefty=0;
righty=0;
function preload(){
  song1=loadSound("music.mp3")
  song2=loadSound("music2.mp3")
}
function setup(){
canvas=createCanvas(600,600)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}
function draw(){
image(video,0,0,600,600)
}
function modelLoaded(){
  console.log("model is loaded")
}
function gotPoses(results){
  if (results.length>0) {
    console.log(results)
    leftx=results[0].pose.leftWrist.x
    lefty=results[0].pose.leftWrist.y
    rightx=results[0].pose.rightWrist.x
    righty=results[0].pose.rightWrist.y  
  }
}




