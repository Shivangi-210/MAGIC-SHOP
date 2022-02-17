nx = 0;
ny = 0;
difference = 0;
leftwristx = 0;
rightwristx = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(500,500);
    canvas.position(650,80);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#ADD8E6");
 
    document.getElementById("ss").innerHTML = "Width and Length of the a square will be -" + difference + "px";
    fill("#FFB6C1");
    stroke("black");
    square(nx , ny , difference);
}

function modelLoaded(){
    console.log("poseNet has loaded")
}

function gotPoses(result){
    if(result.length > 0){
      console.log(result);
      nx = result[0].pose.nose.x;
      ny = result[0].pose.nose.y;

      leftwristx = result[0].pose.leftWrist.x;
      rightwristx = result[0].pose.rightWrist.x;

      difference = floor(leftwristx-rightwristx);
    }
}
