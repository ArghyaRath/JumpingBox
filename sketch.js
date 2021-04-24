var canvas;
var music;
var block1, block2, block3, block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,700);

    //create 4 different surfaces
    block1 = createSprite(100,500,150,30);
    block1.shapeColor = "orange";

    block2 = createSprite(300,500,150,30);
    block2.shapeColor = "red";

    block3 = createSprite(500,500,150,30);
    block3.shapeColor = "green";

    block4 = createSprite(700,500,150,30);
    block4.shapeColor = "gray";

    //create box sprite and give velocity
    box = createSprite(400,300,50,50);
    box.shapeColor = "yellow";
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (block1.isTouching(box)){
        box.shapeColor = "orange";
        box.bounceOff(block1);
    }
    if (block2.isTouching(box)){
        box.shapeColor = "red";
        box.bounceOff(block2);
    }
    if (block3.isTouching(box)){
        box.shapeColor = "green";
        box.bounceOff(block3);
    }
    if (block4.isTouching(box)){
        box.shapeColor = "gray";
        box.bounceOff(block4);
    }
    drawSprites();
}