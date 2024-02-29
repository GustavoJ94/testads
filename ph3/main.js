import Game from './scene/game.js'

let config = {
  	
    type: Phaser.CANVAS,
    scene: Game,
    scale: {
         mode: Phaser.Scale.RESIZE,
    	 autoCenter: Phaser.Scale.CENTER_BOTH,
    	 width: window.innerWidth,
  		 height: window.innerHeight,
     	 autoRound: true,
     	 antialias: true,
    },
    // banner: false
    // disableContextMenu: true,
    // inputTouch: true,
   
}
export default new Phaser.Game(config)
