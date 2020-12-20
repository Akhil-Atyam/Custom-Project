class Trampoline{
    constructor(x,y){
        this.trampoline = Bodies.rectangle(x,y,200,20,{isStatic:true});
        World.add(world,this.trampoline)
        this.xx = x;
        this.yy = y;
    }
    display(){
        rectMode(CENTER);
        noStroke();
        fill("black")
        rect(this.xx-100,this.yy+7.5,10,35);
        rect(this.xx+100,this.yy+7.5,10,35);
        fill("blue");
        rect(this.xx,this.yy-10,220,10);

    }
}