var Game = {
  w: 800,
  h: 600
};

// var w = 800;
// var h = 600;

Game.Boot = function(game) {
  this.game = game;
};

if (localStorage.getItem('highestScore') === null) {
  localStorage.setItem('highestScore', 0);
}

Game.Boot.prototype = {
  preload: function() {
    // console.log('blah'+Game.w);
		this.game.load.image('loading', 'assets/images/loading.png');
		this.game.load.image('title', 'assets/images/title.png');
		this.game.load.image('instructions', 'assets/images/instructions.png');

    this.game.load.bitmapFont('minecraftia','assets/fonts/font.png','assets/fonts/font.xml');
    this.game.load.bitmapFont('arcade','assets/fonts/arcade.png','assets/fonts/arcade.xml');
  },
  create: function() {
   this.game.state.start('Load');
  }
};

Game.Load = function(game) {
  this.game = game;
};

Game.Load.prototype = {
  preload: function() {
    
    //Debug Plugin
    this.game.add.plugin(Phaser.Plugin.Debug);

    //Loading Screen Message/bar
    var loadingText = this.game.add.text(Game.w, Game.h, 'Loading...', { font: '30px Helvetica', fill: '#000' });
  	loadingText.anchor.setTo(0.5, 0.5);
  	var preloading = this.game.add.sprite(Game.w/2-64, Game.h/2+50, 'loading');
  	this.game.load.setPreloadSprite(preloading);

    // Music Track
    // this.game.load.audio('music','soundtrack.mp3');

  },
  create: function() {
    this.game.state.start('Menu');
  }
};
