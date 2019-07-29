
var s;
var scale = 30;
var c = document.getElementById("myCanvas");
var width =c.offsetWidth;
var height = c.offsetHeight;
var ctx = c.getContext("2d");
var food = {x:0 ,y :0};
function Snake( speedSnake){
    this.x = [0];
    this.y = [0];
    this.total = 1;
    this.direction = 0;
    this.xSpeed = speedSnake*scale;
    this.ySpeed = 0;
    this.snakeWillDie = function(){
         clearInterval(snakeInterval);
    }
    this.show = function(){
        console.log(this.total);
        for (var i = 0; i < this.total; i++) {
            ctx.fillRect(this.x[i], this.y[i], scale, scale);
            ctx.stroke();
          }
        
    }
    this.updatePos = function(){
       
        ctx.clearRect(this.x[0], this.y[0] , scale,scale);        
        
        for ( let i = 0 ; i < this.total-2 ; i++){
            if ( this.x[this.total-1] == this.x[i] && this.y[this.total-1] == this.y[i]){
                console.log("snake die");
                this.snakeWillDie();
            }
        }

        if(this.x[this.total-1]== 600){
            this.x[this.total-1] = 0;
        }
        else if ( this.x[this.total-1] <0){
            this.x[this.total-1]=570;
        }
        if(this.y[this.total-1] == 600){
            this.y[this.total-1] = 0;
        }
        else if ( this.y[this.total-1] <0){
            this.y[this.total-1]=570;
        }
        for (var i = 0 ; i< this.total -1 ; i++){
            this.x[i] = this.x[i+1];
            this.y[i] = this.y[i+1];
        }
        this.x[this.total-1] += this.xSpeed;
        this.y[this.total-1] += this.ySpeed;
        

        ctx.stroke();

    }
  

    this.eat = function (x,y) {
        if ( this.x[this.total-1] == x && this.y[this.total-1] == y){
            console.log("eat");
            pickLocation();

            var tempX=this.x[this.total-1]  + this.xSpeed;
            var tempY=this.y[this.total-1] + this.ySpeed;
            console.log("temp" + tempX);
            this.updatePos();
            this.x.push(tempX) ;
            this.y.push(tempY) ;
            this.total ++;
            
            console.log("mang x:" + this.x +" mang y:" + this.y +"total:" + this.total);
        }
      }
    //left up right down
   
}
function pickLocation() {

    food.x = Math.floor(Math.random()*20)*scale;
    food.y = Math.floor(Math.random()*20)*scale;
    console.log ( " cols " + food.x + "rows " + food.y);

  }

  pickLocation();
function init(){
    s= new Snake(1);
}
init();
function draw(){
    s.eat(food.x,food.y);
    s.updatePos();
    s.show();
    ctx.fillRect(food.x,food.y,scale,scale);
    
    ctx.stroke();

}
var i=0;

var snakeInterval = setInterval(draw,100);

document.onkeydown = function(event) {
    var key = event.keyCode;                
            switch(key) {
              case 37:
                  console.log("left");
                  if (s.xSpeed ==0){
                  s.xSpeed = - Math.abs(s.ySpeed);
                  s.ySpeed = 0;
                }
                  break;
              case 38:
                  console.log("up");
                  if (s.ySpeed ==0){
                  s.ySpeed = -Math.abs(s.xSpeed);
                  s.xSpeed = 0;
                  }
                  break;
              case 39:
                  console.log("right");
                  if (s.xSpeed ==0){
                  s.xSpeed = Math.abs(s.ySpeed);
                  s.ySpeed = 0;
                  }
                  break;
              case 40:
                  console.log("down");
                  if (s.ySpeed ==0){
                    s.ySpeed = Math.abs(s.xSpeed);
                    s.xSpeed = 0;
                  }
                  break;
        }   
  };