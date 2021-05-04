class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
            density:1.2,
            restitution:0.7,
            friction:0.00001,
            frictionAir:0.00001
        }

        this.x = x;
        this.y = y;
        this.image = loadImage("Images/soccer-ball.png")
        this.body = Bodies.circle(x,y,25,options)
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop()
    }
}