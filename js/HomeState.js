var HomeState ={
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
        this.load.image('logo','assets/images/logo.png');
        this.load.image('start','assets/images/start.png');


    },

    create: function () {
        this.title = this.game.add.sprite(this.game.world.centerX, 0, 'logo');
        this.title.anchor.setTo(0.5, 1);
        this.title.scale.setTo(0.7);


        this.start = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY*1.7, 'start');
        this.start.anchor.setTo(0.5);

        this.start.inputEnabled = true;
        this.start.input.pixelPerfectClick = true;
        this.start.scale.setTo(0.1);
        this.start.visible = false;
        this.start.events.onInputDown.add(this.play, this);

        var newMoviment = this.game.add.tween(this.title);
        newMoviment.to({y:this.game.world.centerY+70}, 1000);
        newMoviment.onComplete.add(function() {
            this.start.visible = true;
        }, this);

        newMoviment.start();
    },

    update: function () {
    },

    play: function () {
        this.game.state.start("GameState");
    }


}