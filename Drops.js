class createDrop {
    constructor(x, y,r) {

        var options ={
          friction:0.2
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y,r,options);       
        
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }


update (){
 if(this.rain.position.y>height){
     Matter.body.setPosition(this.rain,{x:random (0,400),y:random (0,400)})
 }
}}