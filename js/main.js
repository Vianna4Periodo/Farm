var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.isRotate = false;
    },

    //carregar os assets
    preload: function () {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse', 'assets/images/horse.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('sheep', 'assets/images/sheep.png');

        this.load.image('arrow', 'assets/images/arrow.png');
    },

    //criar os elementos
    create: function () {

        this.background = this.game.add.sprite(0, 0, 'background');

        var animalData = [
            {key: 'chicken', text: 'CHICKEN'},
            {key: 'horse', text: 'HORSE'},
            {key: 'pig', text: 'PIG'},
            {key: 'sheep', text: 'SHEEP'}
        ];

        this.animals = this.game.add.group();
        var self = this;

        animalData.forEach(function(element) {
            self.animals.create(200, self.game.world.centerY, element.key);
        });


        // this.chicken = this.game.add.sprite(0, -50, 'chicken');
        // this.horse = this.game.add.sprite(500, 200, 'horse');
        // this.pig = this.game.add.sprite(300, 200, 'pig');
        // this.sheep = this.game.add.sprite(100, 200, 'sheep');

        // this.chicken.anchor.setTo(0);
        // this.horse.anchor.setTo(0.5);
        // this.pig.anchor.setTo(0.5);
        // this.sheep.anchor.setTo(0.5);
        //
        // this.horse.scale.setTo(-1, 1);
        // this.pig.scale.setTo(-0.8, 0.8);
        // this.sheep.scale.setTo(-0.99, 0.99);
        //
        // this.sheep.angle = 90;
        // this.chicken.angle = 45;

        // Left Arrow
        this.leftArrow = this.game.add.sprite(60, this.world.centerY, 'arrow');
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.setTo(-1, 1);
        this.leftArrow.inputEnabled = true;
        this.leftArrow.customParams = (direction = 1);
        // this.leftArrow.events.onInputDown.add(this.swithAnimal("teste", "teste"), this);

        // Right Arrow
        this.rightArrow = this.game.add.sprite(580, this.world.centerY, 'arrow');
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.inputEnabled = true;
        this.rightArrow.customParams = (direction = -1);
        // this.rightArrow.events.onInputDown.add(this.swithAnimal("teste", "teste"), this);

        // Interações
        // this.pig.inputEnabled = true;
        // this.pig.events.onInputDown.add(this.animateAnimal, this);
        // this.pig.input.pixelPerfectClick = true;
    },

    //atualizar
    update: function () {
        // this.sheep.angle += 22;
        // this.pig.angle -= 22;

        if (this.isRotate) {
            this.horse.angle -= 30;
        }
    },

    animateAnimal: function() {
        this.isRotate = !this.isRotate;
    },

    swithAnimal: function(sprite, event) {
        console.log(sprite);
    }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');