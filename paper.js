class Paper {
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(100,655,30,options);

        World.add(world,this.body);
        this.body.position.x = 100;
        this.body.position.y = 655;
        this.image = loadImage("paper.png");
    }
    display(){
        fill("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,90,90);
    }
}