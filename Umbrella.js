class Umbrella{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0.1,
            isStatic:true
        }
        this.r =10
        
        this.body = Bodies.circle(x,y,this.r, options);
        World.add(world, this.body);
      }
      display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        imageMode(CENTER);
        noStroke();
       image(0,0,this.r,this.r)
        pop();
      }
    
}