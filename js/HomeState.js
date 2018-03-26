var HomeState = {
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
        this.load.image('title','assets/images/large_farm-friends-title.png');
        this.load.image('buttonStart','assets/images/start.png');
    },

    create: function () {
        this.title = this.game.add.sprite(this.game.world.centerX, 0, 'title');
        this.title.anchor.setTo(0.5, 1);
        this.title.scale.setTo(0.6);

        this.buttonStart = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 70, 'buttonStart');
        this.buttonStart.anchor.setTo(0.5);
        this.buttonStart.scale.setTo(0.1);
        this.buttonStart.inputEnabled = true;
        this.buttonStart.input.pixelPerfectClick = true;
        this.buttonStart.events.onInputDown.add(this.startGame,this);
        this.buttonStart.alpha = 0;

        var buttonStartAnimation = this.game.add.tween(this.buttonStart);
        buttonStartAnimation.to({ alpha: 1 }, 1000);

        var titleAnimation = this.game.add.tween(this.title);
        titleAnimation.to( {y: this.game.world.centerY + 50 }, 1000);
        titleAnimation.onComplete.add(function() {
            buttonStartAnimation.start();
        }, this);

        titleAnimation.start();
    },

    update: function () {
    },

    startGame: function() {
        this.game.state.start('GameState');
    }
};