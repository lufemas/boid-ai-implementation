class Boid extends Phaser.GameObjects.Triangle {
    constructor(scene,{init_x,init_y}){

        super(scene,0,0,0,18,6,0,12,18,0xffffff)

        this.position = new Phaser.Math.Vector2(init_x,init_y)
        this.setPosition(this.position)
        
        this.velocity = new Phaser.Math.Vector2(Phaser.Math.FloatBetween(-1,1),Phaser.Math.FloatBetween(-1,1)).normalize(); 
        let rndMag = Phaser.Math.FloatBetween(.5,1.5)
        this.velocity.multiply( new Phaser.Math.Vector2(rndMag,rndMag));

        this.acceleration = new Phaser.Math.Vector2()
        scene.add.existing(this)

    }

    setPosition({x,y}){
        super.setPosition(x,y);
    }

    align(boids){

        let perceptionRadius = parseInt($alignPerceptionDistanceRangeSpan.innerText );

        let steering = new Phaser.Math.Vector2();

        let total = 0;

        for (let other of boids){

            if ( Phaser.Math.Distance.BetweenPoints(this.position,other.position) <= perceptionRadius && other != this){
                steering.add(other.velocity);
                total++;
            } 
        }

        if (total > 0){
            // console.log(steering)
            steering.divide(new Phaser.Math.Vector2(total,total));
            // console.log(total)
            // console.log(steering)

            steering.subtract(this.velocity);
            // console.log(steering)
            // console.log(`--------------------`)

        } 

        return steering.normalize().scale(parseInt($alignIntensityRangeSpan.innerText )/10);
    }

    cohesion(boids){

        let perceptionRadius = parseInt($cohesionPerceptionDistanceRangeSpan.innerText );

        let steering = new Phaser.Math.Vector2();

        let total = 0;

        for (let other of boids){

            if ( Phaser.Math.Distance.BetweenPoints(this.position,other.position) <= perceptionRadius && other != this){
                steering.add(other.position);
                total++;
            } 
        }

        if (total > 0){
            // console.log(steering)
            steering.divide(new Phaser.Math.Vector2(total,total));
            // console.log(total)
            // console.log(steering)

            steering.subtract(this.position);
            // steering.normalize()
            steering.subtract(this.velocity)
            // console.log(steering)
            // console.log(`--------------------`)

        } 

        return steering.normalize().scale($cohesionIntensityRangeSpan.innerText /10);
    }

    separation(boids){

        let perceptionRadius = parseInt($separationPerceptionDistanceRangeSpan.innerText );

        let steering = new Phaser.Math.Vector2();

        let total = 0;

        for (let other of boids){

            let dist = Phaser.Math.Distance.BetweenPoints(this.position,other.position);

            if (  dist <= perceptionRadius && other != this){
                let diff = new Phaser.Math.Vector2(this.position.x, this.position.y)
                diff.subtract(other.position);
                diff.scale(1/dist)
                steering.add(diff);
                total++;
            } 
        }

        if (total > 0){

            steering.divide(new Phaser.Math.Vector2(total,total));

            // steering.subtract(this.velocity)


        } 

        return steering.normalize().scale($separationIntensityRangeSpan.innerText /10);
    }

    flock(boids){
        let alignmentForce = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separ = this.separation(boids)
        this.acceleration.add(alignmentForce);
        this.acceleration.add(cohesion);
        this.acceleration.add(separ)
    }


    update(){
        super.update()
        this.position.add(this.velocity)
        this.setPosition(this.position)
        this.velocity.add(this.acceleration.normalize())
        this.acceleration = Phaser.Math.Vector2.ZERO;

        if( this.position.x > app.config.width) this.position.x = 0;
        if( this.position.x < 0) this.position.x = app.config.width;
        if (this.position.y > app.config.height) this.position.y = 0;
        if (this.position.y < 0 ) this.position.y = app.config.height;

        // this.rotation = Math.atan(this.velocity.y /this.velocity.x) + 1
        this.rotation = Phaser.Math.Angle.Between(0, 0, this.velocity.x, this.velocity.y) + Math.PI/2
        // this.rotation =  1 * Math.PI

    }

}