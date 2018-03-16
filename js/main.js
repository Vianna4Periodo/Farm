var GameState = {
    //carregar os assets
    preload: function () {

    },

    //criar os elementos
    create: function () {

    },

    //atualizar
    update: function () {

    }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');