class Sand{
    constructor(x,y){

        var options = {
            restitution: 1.25,
            friction: 1.3,
            density: 1
        }

        this.body = Bodies.circle(x,y,10,options);

        this.radius = 5;
  
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x,pos.y);

        rotate(angle);

        ellipseMode(CENTER);

        fill("yellow");

        ellipse(0,0,10,10);

        pop();
    }
  }
  