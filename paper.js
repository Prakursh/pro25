class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("rgb(47,79,79)");
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,33,33);
    }
}