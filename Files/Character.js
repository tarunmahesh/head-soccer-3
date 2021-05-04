class Character {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          friction:0.7
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      pop();
    }
  };