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
document.addEventListener("keyup", down);

function jump() {
    yUp =185;
    xUp +=15;

} 
function down(){
    yUp +=25;
    xUp +=10;
}

 var enemys =[];

enemys[0] = {
    x: cvs.width,
    y: 0
}
var xUp = 10;
var yUp = 210;


var xPos = 150;
var yPos = 204;
var speed = -2;

function draw() {
    
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(enemy, xPos, yPos, 30, 30)
    ctx.drawImage(mario, xUp, yUp, 15, 15);
    
    xPos += speed;
    requestAnimationFrame(draw);
    
}

enemy.onload = draw;











//for(var i = 0; i < enemy.length; i++){
    // ctx.drawImage(enemy, enemys[i].x, enemys[i].y, 30, 30);
    // enemys[i].x--;

    // if(enemys[i].x==125) {
    //     enemys.push({
    //         x:cvs.width,
    //         y: 100
    //     })
    // }
    // }