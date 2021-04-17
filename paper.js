class Paper {
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options)
        this.width = 10
        this.height = 10
        World.add(world, this.body)
    }
    displayPaper(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        rectMode(CENTER)
        rect(this.body.x, this.body.y, this.width, this.height)
        pop()
    }
}