class Leg {
    constructor(x,y,r, angle) {
        var options = {
            isStatic: false,
            friction:0.7
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.angle = angle
        //angle = player.rotation
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        pop();
      }
}