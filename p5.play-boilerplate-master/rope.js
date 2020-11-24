class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //how strong connection is
            stiffness: 0.04,
            length: 300
        }
        this.pointB = pointB
        //creating connection
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        strokeWeight(4)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}
