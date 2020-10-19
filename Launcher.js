class Launcher
{
    constructor(body, pointB)
    {
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly()
    {
        this.launcher.bodyA = null;
    }

    attach(body)
    {
        this.launcher.bodyA = body;
    }

    display()
    {
        if(this.launcher.bodyA)
        {
            strokeWeight(4);
            stroke(0);
            line(this.launcher.bodyA.position.x, this.launcher.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
}