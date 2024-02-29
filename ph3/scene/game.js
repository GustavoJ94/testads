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

    create() {
        this.imageList = []
        let scaleLogo = 0.25
        
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
        this.logoPhaser = this.add.sprite(window.innerWidth / 2, window.innerHeight*0.5, 'logoPhaser').setScale(scaleLogo*window.devicePixelRatio).setInteractive()
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
        this.logoLeftTop = this.add.sprite(0, 0, 'logo').setScale(scaleLogo*window.devicePixelRatio).setOrigin(0, 0)
     

        // logoRightTop -------------------------------------------------------------
        this.logoRightTop = this.add.sprite(window.innerWidth, 0, 'logo').setScale(scaleLogo*window.devicePixelRatio).setOrigin(1, 0)
     

        // logoLeftBottom -------------------------------------------------------------
        this.logoLeftBottom = this.add.sprite(0, window.innerHeight, 'logo').setScale(scaleLogo*window.devicePixelRatio).setOrigin(0, 1)
      

        // logoRightBottom -------------------------------------------------------------
        this.logoRightBottom = this.add.sprite(window.innerWidth, window.innerHeight, 'logo').setScale(scaleLogo*window.devicePixelRatio).setOrigin(1, 1)
      

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

        this.cameras.resize(width, height);

         this.bg.displayWidth = width
        this.bg.displayHeight = height
        this.bg.setPosition(width / 2, height / 2);
        this.logoPhaser.setPosition(width / 2, height / 2);

        this.text.setPosition(width / 2, (height/2) - 50)

        this.logoLeftTop.setScale(0.25*window.devicePixelRatio)
        this.logoRightTop.setScale(0.25*window.devicePixelRatio)
        this.logoLeftBottom.setScale(0.25*window.devicePixelRatio)
        this.logoRightBottom.setScale(0.25*window.devicePixelRatio)

        this.logoLeftTop.setPosition(0, 0).setOrigin(0, 0)
        this.logoRightTop.setPosition(window.innerWidth, 0).setOrigin(1, 0)
        this.logoLeftBottom.setPosition(0, window.innerHeight).setOrigin(0, 1)
        this.logoRightBottom.setPosition(window.innerWidth, window.innerHeight).setOrigin(1, 1)
    }

}
