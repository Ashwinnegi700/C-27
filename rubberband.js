class Chain {
    constructor(body1,body2){
        var Option={
            bodyA:body1.body,
            bodyB:body2.body

        }
        this.chain=Constraint.create(Option)
        World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}