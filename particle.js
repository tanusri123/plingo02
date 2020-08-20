class particle{
    constructor(x,y,r){
        var options={
            resistution=0.4
        }
        this.r=2;
        this.body=body.circle(x,y,this.r,options);
        this.color=color(Random(0,255,),Random(0,255,),Random(0,255,));
        World.add(world,this.body)

    }
    display(){

        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipsemode="centre";
        ellipse(0,0,this.r,this.y);
        push();
    }
}



