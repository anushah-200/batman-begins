class Umbrella {
    constructor(x, y,r) {

        var options ={
         isStatic:true
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.image=loadImage("walking_1.png")
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        

        push();
        translate(pos.x, pos.y);
       
        noStroke();
        fill("blue")
        ellipseMode(RADIUS)
       imageMode (CENTER)
        ellipse(0, 0, this.r,this.r)
        image(this.image,pos.x,pos.y,50)
        pop();
    }



}