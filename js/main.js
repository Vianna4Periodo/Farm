var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    //carregar os assets
    preload: function () {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse', 'assets/images/horse.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('sheep', 'assets/images/sheep.png');
    },

    //criar os elementos
    create: function () {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.chicken = this.game.add.sprite(0, -50, 'chicken');
        this.horse = this.game.add.sprite(500, 200, 'horse');
        this.pig = this.game.add.sprite(300, 200, 'pig');
        this.sheep = this.game.add.sprite(100, 200, 'sheep');

        this.chicken.anchor.setTo(0);
        this.horse.anchor.setTo(0.5);
        this.pig.anchor.setTo(0.5);
        this.sheep.anchor.setTo(0.5);

        this.horse.scale.setTo(-1, 1);
        this.pig.scale.setTo(-0.8, 0.8);
        this.sheep.scale.setTo(-0.99, 0.99);

        this.sheep.angle = 90;
        this.chicken.angle = 45;
    },

    //atualizar
    update: function () {
        // this.sheep.angle += 22;
        // this.pig.angle -= 22;
        // this.horse.angle -= 30;

    }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');