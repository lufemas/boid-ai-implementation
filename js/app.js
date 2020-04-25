var config = {
    width : 1200,
    height: 800,
    backgroundColor : 0x000000,
    scene : [Scene1,],
    fps: {
        target: 30,
        forceSetTimeOut: true
    },
}

var app = new Phaser.Game(config);
