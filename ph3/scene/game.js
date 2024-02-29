let log = console.log

import { app } from '../libs/appScale.js'


export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {
        this.load.image('bg', 'background.jpg')
        this.load.image('logo', 'logo.png')
        this.load.image('logoPhaser', 'phaser3-logo.png')
        this.add.text(0, 0, "", { font: "1px Dimbo" }).destroy();
    }

    scaleSprite (sprite, availableSpaceWidth, availableSpaceHeight, scaleMultiplier) {
        var scale = this.getSpriteScale(sprite.width, sprite.height, availableSpaceWidth, availableSpaceHeight);
        sprite.setScale(scale * scaleMultiplier);
    }

    getSpriteScale (spriteWidth, spriteHeight, availableSpaceWidth, availableSpaceHeight) {
        var ratio = 1;
        var currentDevicePixelRatio = window.devicePixelRatio;
        if(currentDevicePixelRatio < 2) currentDevicePixelRatio = 2
        // Sprite needs to fit in either width or height
        var widthRatio = (spriteWidth * currentDevicePixelRatio + 2 ) / availableSpaceWidth;
        var heightRatio = (spriteHeight * currentDevicePixelRatio + 2 ) / availableSpaceHeight;
        if(widthRatio > 1 || heightRatio > 1){
            ratio = 1 / Math.max(widthRatio, heightRatio);
        }
        return ratio * currentDevicePixelRatio;
    }

    create() {
        this.imageList = []
        var scaleLogo = 0.5
        
        // background -------------------------------------------------------------
        //Stretch
        //let bg = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'bg')
        //bg.update = function () {
            //this.displayWidth = app.width
            //this.displayHeight = app.height
        //}
        
        //Proportion
        this.bg = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'bg').setOrigin(0.5)
        this.bg.displayWidth = window.innerWidth
        this.bg.displayHeight = window.innerHeight


        // logoCenter -------------------------------------------------------------

        // logoPhaser -------------------------------------------------------------
        this.logoPhaser = this.add.sprite(window.innerWidth / 2, window.innerHeight*0.5, 'logoPhaser').setInteractive()
        this.scaleSprite(this.logoPhaser,window.innerWidth,window.innerHeight,0.5)
        this.logoPhaser.on('pointerup', function () {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                //this.cameraUpdate()
            }
            else {
                this.scale.startFullscreen();
                //this.cameraUpdate()
            }
        }, this);

 

        // logoLeftTop -------------------------------------------------------------
        this.logoLeftTop = this.add.sprite(0, 0, 'logo').setOrigin(0, 0)
        this.scaleSprite(this.logoLeftTop,window.innerWidth,window.innerHeight,0.3)

        // logoRightTop -------------------------------------------------------------
        this.logoRightTop = this.add.sprite(window.innerWidth, 0, 'logo').setOrigin(1, 0)
        this.scaleSprite(this.logoRightTop,window.innerWidth,window.innerHeight,0.3)


        // logoLeftBottom -------------------------------------------------------------
        this.logoLeftBottom = this.add.sprite(0, window.innerHeight, 'logo').setOrigin(0, 1)
        this.scaleSprite(this.logoLeftBottom,window.innerWidth,window.innerHeight,0.3)


        // logoRightBottom -------------------------------------------------------------
        this.logoRightBottom = this.add.sprite(window.innerWidth, window.innerHeight, 'logo').setOrigin(1, 1)
        this.scaleSprite(this.logoRightBottom,window.innerWidth,window.innerHeight,0.3)


        // text -------------------------------------------------------------
        var style = { font: ' 150px Arial', fill: "#ffeeff" };
        this.text = this.add.text(app.centerX, app.centerY - 50, 'Qugurun', style).setScale(scaleLogo).setOrigin(0.5)

        this.text.setInteractive({ cursor: 'pointer' })

        this.text.on('pointerover', function (event) {
            this.alpha = 0.5;
        });

        this.text.on('pointerout', function (event) {
            this.alpha = 1.0;
        });

        // -------------------------------------------------------------

        // -------------------------------------------------------------

       // this.scale.on('resize', this.resize, this)
       this.scale.on('resize', this.resize, this);

    }


    resize (gameSize, baseSize, displaySize, resolution){
        const width = gameSize.width;
        const height = gameSize.height;
        //this.cameras.resize(width, height);
        const camera = this.cameras.main
        //camera.setZoom(app.zoom)
        //camera.centerOn(width/2, height/2)

         this.bg.displayWidth = width
        this.bg.displayHeight = height
        this.bg.setPosition(width / 2, height / 2);
        this.logoPhaser.setPosition(width / 2, height / 2);

        this.text.setPosition(width / 2, (height/2) - 50)
    //  var aspect = window.innerWidth > window.innerHeight ? window.innerWidth / window.innerHeight : window.innerHeight / window.innerWidth
        
        this.scaleSprite(this.logoLeftTop,window.innerWidth,window.innerHeight,0.3)
        this.scaleSprite(this.logoRightTop,window.innerWidth,window.innerHeight,0.3)
        this.scaleSprite(this.logoLeftBottom,window.innerWidth,window.innerHeight,0.3)
        this.scaleSprite(this.logoRightBottom,window.innerWidth,window.innerHeight,0.3)

        this.logoLeftTop.setPosition(0, 0)
        this.logoRightTop.setPosition(window.innerWidth, 0)
        this.logoLeftBottom.setPosition(0, window.innerHeight)
        this.logoRightBottom.setPosition(window.innerWidth, window.innerHeight)
    }

}
