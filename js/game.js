var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

var mario = new Image();
var bg = new Image();
var marioJump = new Image();
var pipe = new Image();
var enemy = new Image();

mario.src = "img/mario.png";
bg.src = "img/bg.png";
marioJump.src = "img/marioJump.png";
pipe.src = "img/pipe.png";
enemy.src = "img/enemy.png";


document.addEventListener("keydown",jump);

function jump() {
    yPos -=20;
}

var enemy =[];

enemy[0] = {
    x: cvs.width,
    y: 0
}

var xPos = 10;
var yPos = 210;
var grav = 0;

function draw() {
    
    ctx.drawImage(bg, 0, 0);
    for(var i = 0; i < enemy.length; i++){
    ctx.drawImage(enemy, enemy[i].x, enemy[i].y, 30, 30);
    enemy[i].x--;
    }
    

    ctx.drawImage(mario, xPos, yPos, 15, 15);
    
    yPos += grav;
    requestAnimationFrame(draw);
    
}

enemy.onload = draw;
/