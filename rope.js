// class for my rope
class Rope{
    // adding the parameters for the class as first body and second body
    constructor(bodyA, pointB){
        // options for the rope which is being created
        var options = {
            // sets the lib bodyA to our bodyA
            bodyA:bodyA,
            // sets the lib pointB to our pointB
            pointB:pointB,
            // sets the stiffness of the rope
            stiffness:1,
            angularStiffness:1,
            // sets the length of the rope
            length:400
        }
        
        // sets the pointB to this.pointB
        this.pointB = pointB;
        // creates the rope and adds the options to it and also adds it to the world
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    // the display function
    // through which the ropes gets displayed on the screen
    display(){
        // displays only if the bodies are there
        if(this.rope.bodyA){
            // namespacing the pointA and pointB positions
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;

            // pushes every color
            push();

            // sets the thickness and the color of the line
            strokeWeight(3);
            stroke("white");
            // creates the line using the namespaces
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            // pops every color
            pop();
        }
    }
}

