import Game from './scene/game.js'

let config = {
    type: Phaser.CANVAS,
    scene: Game,
    scale: {
        mode: Phaser.Scale.RESIZE,
    },
    // banner: false
    // disableContextMenu: true,
    // inputTouch: true,
   
}
export default new Phaser.Game(config)
