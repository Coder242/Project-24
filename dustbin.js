class Dustbin {

    constructor(x,y,width,height){

        var options = {
            isStatic : true

        }

        this.body1 = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body1);

    }

    display(){

        push();
        fill("red");

        rectMode(CENTER);
        translate(this.body1.position.x, this.body1.position.y);
        rect(0, 0, this.width, this.height);
        
        pop();
        
    }

}