class Paper {
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        fill("violet");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r);
        pop();
    }
}