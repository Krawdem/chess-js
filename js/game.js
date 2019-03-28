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
    ctx.drawImage(marioJump, 10, 210, 15, 15);
    

} 
function down(){
    yUp =210;
   
}


 var enemys =[];

enemys[0] = {
    x: cvs.width,
    y: 0,
}


var xUp = 50;
var yUp = 210;

var gap = 204;


function draw() {
    
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(mario, xUp, yUp, 15, 15);
    
    for(var i = 0; i < enemys.length; i++) {
        ctx.drawImage(enemy, enemys[i].x, enemys[i].y + gap, 30, 30);
        
        enemys[i].x--;
        

        if(enemys[i].x == 50){
            enemys.push({
            x : cvs.width,
            y : 4 });
            
        }
        if(xUp + enemys.width >= enemys[i].x
            && xUp <= enemys[i].x 
            && (yUp <= enemys.y || yUp + mario.width >= enemys[i].y )|| yUp + mario.width >= cvs.width)

        requestAnimationFrame(draw, );
    }  
   
}





enemy.onload = draw;











