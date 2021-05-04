class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.9,
            length : 60
        }

        this.bodyA = bodyA;
        this.bodyB = bodyB;
    
        this.body = Constraint.create(options)

        World.add(world,this.body)
    }

  };