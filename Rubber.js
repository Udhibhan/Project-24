class Rubber {
    constructor(x,y){

        var options = {
            restitution : 0.3,
            friction : 5,
            density : 1
        }
    //circle takes diameter; ellipse takes radius
    this.body = Bodies.circle(x,y,20,options);
    this.radius = 20;

    World.add(world,this.body);
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("Blue");
        ellipseMode(CENTER);
        ellipse(0,0,40,40);
        pop();  
    }
}