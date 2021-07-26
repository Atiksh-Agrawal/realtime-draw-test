function setup(){
    canvas = createCanvas(550,500);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(400,400);

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',getPoses);
}

function draw(){
   background("beige");
}

function modelLoaded(){
    console.log("posenet is initialized")
}

function getPoses(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}