class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body1 = Bodies.rectangle(x,y+55,width-20,height-100,options);
        this.body2 = Bodies.rectangle(x-50,y-5,width-100,height-20,options);
        this.body3 = Bodies.rectangle(x+50,y-5,width-100,height-20,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        
        World.add(world,this.body1);
        World.add(world,this.body2);
        World.add(world,this.body3);
    }

    display(){
        fill("white");
        rect(this.x,this.y+55,this.width-20,this.height-100);
        rect(this.x-50,this.y-5,this.width-100,this.height-20);
        rect(this.x+50,this.y-5,this.width-100,this.height-20);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}