
var LoadState = {};var game = new Phaser.Game(640,360,Phaser.AUTO);

game.state.add('HomeState', HomeState);
game.state.add('GameState',GameState);
game.state.start('HomeState');