var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
        this.load.image('background','assets/images/background.png');
        this.load.image('arrow','assets/images/arrow.png');

        // this.load.image('chicken','assets/images/chicken.png');
        // this.load.image('horse','assets/images/horse.png');
        // this.load.image('pig','assets/images/pig.png');
        // this.load.image('sheep','assets/images/sheep.png');

        this.load.spritesheet('chicken', 'assets/images/chicken_spritesheet.png', 131, 200, 3);
        this.load.spritesheet('horse', 'assets/images/horse_spritesheet.png', 212, 200, 3);
        this.load.spritesheet('pig', 'assets/images/pig_spritesheet.png', 297, 200, 3);
        this.load.spritesheet('sheep', 'assets/images/sheep_spritesheet.png', 244, 200, 3);
    },

    create: function () {
        this.background = this.game.add.sprite(0, 0, 'background');

        var animalData = [
            {key:'chicken' , text:'CHICKEN'},
            {key:'horse' , text:'HORSE'},
            {key:'pig' , text:'PIG'},
            {key:'sheep' , text:'SHEEP'}
        ];

        this.animals = this.game.add.group();

        var self = this;

        animalData.forEach(function (element) {
            animal = self.animals.create(-1000, self.game.world.centerY,element.key);
            animal.animations.add('animate', [0, 1, 2, 1, 0, 1], 3, false);
            animal.customParams = {text: element.text};
            animal.anchor.setTo(0.5);
            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(self.animateAnimal, self);
        });

        this.currentAnimal = this.animals.next();
        this.currentAnimal.position.set(this.game.world.centerX, this.world.centerY);

        this.showText(this.currentAnimal);

        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY,'arrow');
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.setTo(-1,1);
        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal,this);

        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY,'arrow');
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.scale.setTo(1,1);
        this.rightArrow.inputEnabled = true;
        this.rightArrow.input.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchAnimal,this);

        this.leftArrow.customParams = {direction: 1};
        this.rightArrow.customParams = {direction: -1};
    },

    update: function () {
    },

    animateAnimal: function (sprite, event) {
        sprite.play('animate');
    },

    showText: function(animal) {
        if(!this.animalText){
            var style = {
                font: 'bold 30pt Arial',
                fill: 'D01718',
                align: 'center'
            };

            this.animalText = this.game.add.text(this.game.width / 2, 40, '', style);
            this.animalText.anchor.setTo(0.5);
        }

        this.animalText.setText(animal.customParams.text);
        this.animalText.visible = true;
    },

    switchAnimal: function (sprite, event) {
        var newAnimal, endX;

        this.animalText.visible = false;

        if(this.isMoving) {
            return;
        }

        this.isMoving = true;

        if(sprite.customParams.direction > 0) {
            newAnimal = this.animals.next();
            newAnimal.x = - newAnimal.width / 2;
            endX = this.game.width + this.currentAnimal.width / 2;
        } else {
            newAnimal = this.animals.previous();
            newAnimal.x = this.game.width + newAnimal.width / 2;
            endX = 0 - this.currentAnimal.width / 2;
        }

        var newAnimalMoviment = this.game.add.tween(newAnimal);
        newAnimalMoviment.to({x:this.game.world.centerX}, 1000);
        newAnimalMoviment.onComplete.add(function() {
            this.isMoving = false;
            this.showText(newAnimal);
            this.animateAnimal(newAnimal);
        }, this);

        newAnimalMoviment.start();

        var currentAnimalMoviment = this.game.add.tween(this.currentAnimal);
        currentAnimalMoviment.to({x:endX}, 1000);
        currentAnimalMoviment.start();

        this.currentAnimal = newAnimal;
    }
};

var game = new Phaser.Game(640,360,Phaser.AUTO);

game.state.add('GameState',GameState);
game.state.start('GameState');