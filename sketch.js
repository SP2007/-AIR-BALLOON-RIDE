var  balloon, balloonPos;
var database, position;
var backgroundImg;
//var background = "Hot Air Ballon-01.png";


function preload(){
 // getBackgroundImg();
}



function setup() {
  database=firebase.database();
    console.log(database);
  createCanvas(500,500);
  balloon=createSprite(400, 200, 50, 50);
  var balloonPosition=database.ref('balloon/height');
  //balloonPosition.on("value",readPosition, showError);
}

function draw() {
        background('Hot Air Ballon-01.png' );

if(keyDown(LEFT_ARROW)){
  balloon.x = baloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
}
else if(keyDown(UP_ARROW)){
 upDateHeight(0,-10);
 balloon.addAnimation("Hot Air Ballon-02.png",balloonImage2);
 balloon.scale=balloon.scale -0.01;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;
}


  if(position!==undefined)
  drawSprites();
}