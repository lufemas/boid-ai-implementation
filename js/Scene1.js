const flock = [];

class Scene1 extends Phaser.Scene {
    constructor() {
        super("firstScene")
       
    }


    preload(){
        this.load.image("triangle", "./assets/triangle.png");
    }

    create() {
        this.flockGroup = this.add.group();
      
        for(let i = 0 ; i < 150 ; i++){

            flock.push( new Boid(this,{
                init_x:Phaser.Math.Between(0,app.config.width), 
                init_y:Phaser.Math.Between(0,app.config.height)
            }));
        }

        flock[1].fillColor = 0xff0000;


        console.log(new Phaser.Math.Vector2(1,2).scale(2))
    }

    update() {
        flock.forEach( boid => {
            boid.flock(flock);
            boid.update();
        });
        
        // console.log(flock[27].position);
    }

}