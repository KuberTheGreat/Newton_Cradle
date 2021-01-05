// class for my bob
class Bob{
    // adding the parameteres to the class x and y positions
    constructor(x, y){
        // options for the body
        var options = {
            // bounciness or motion 
            restitution:1,
            // friction and opposite friction as 0
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }

        // creates the body and gives the parameters to it and adds to the world
        this.body = Bodies.circle(x, y, 60 / 2, options);
        // every time gives a random color
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

        // sets the this.radius to 60
        this.radius = 60;
    }

    // the display function
    // through which the bobs get displayed on the screen
    display(){
        // namespacing the position and angle of the body
        var pos = this.body.position;
        var angle = this.body.angle;

        // pushes every color further
        push();

        // gives an angle to the bob
        translate(pos.x, pos.y);
        // rotates the bob 
        rotate(angle);

        // gives no outline border to the bob
        noStroke();
        // fills the bob with the random color
        fill(this.color);
        // creates the ellipse/circle/bob
        ellipse(0, 0, this.radius, this.radius);

        // pop every color backward
        pop();
    }
}