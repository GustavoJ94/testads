let log = console.log

class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    onClickDownload(){
        alert('your url here')
    }

    preload() {
        this.style1 = { font: ' 52px Arial', fill: "#ffffff",stroke: '#ffffff',strokeThickness:4};
        this.load.image('hand', 'assets/hand.png');
        this.load.image('ctabtn', 'assets/ctabtn.png');
        this.load.image('logo', 'assets/logo.png');
        //this.load.atlas('atlas', atlas, atlasJSON);
    }

    scaleSpriteTween (sprite, availableSpaceWidth, availableSpaceHeight, scaleMultiplier) {
        var scale = this.getSpriteScale(sprite.width, sprite.height, availableSpaceWidth, availableSpaceHeight);
        this.tweens.chain({targets: sprite, tweens:[{scale: {value:scale * (scaleMultiplier+0.2)}, duration: 400,  ease: 'sine.in'}, {scale: {value:scale * scaleMultiplier}, duration: 250,  ease: 'sine.out'}]}); 
    }

    scaleSprite (sprite, availableSpaceWidth, availableSpaceHeight, scaleMultiplier) {
        var scale = this.getSpriteScale(sprite.width, sprite.height, availableSpaceWidth, availableSpaceHeight);
        sprite.setScale(scale * scaleMultiplier);
    }

    getSpriteScale (spriteWidth, spriteHeight, availableSpaceWidth, availableSpaceHeight) {
        var ratio = 1;
        var currentDevicePixelRatio = window.devicePixelRatio;
        // Sprite needs to fit in either width or height
        var widthRatio = (spriteWidth * currentDevicePixelRatio + 2 ) / availableSpaceWidth;
        var heightRatio = (spriteHeight * currentDevicePixelRatio + 2 ) / availableSpaceHeight;
        if(widthRatio > 1 || heightRatio > 1){
            ratio = 1 / Math.max(widthRatio, heightRatio);
        }
        return ratio * currentDevicePixelRatio;
    }

    create() {
	  	this.cameras.main.setBackgroundColor(0xffffff)
	    
	    this.setGameScene()
	   // this.setCTA()

	    this.scale.on('resize', this.resize, this)
	    //this.scale.emit('resize')
    }

    setGameScene(){
        this.mainVideo = this.add.video(window.innerWidth*0.5,window.innerHeight*0.5);
        this.mainVideo.loadURL('assets/tennis.mp4', true);

        this.scaleSprite(this.mainVideo,window.innerWidth/2,window.innerHeight/2, 0.5)
        this.mark1 = this.mainVideo.addMarker('init',0,1)
        this.mark2 = this.mainVideo.addMarker('play1',1,4)
        this.mark3 = this.mainVideo.addMarker('play2',4,5.8)
        this.mark4 = this.mainVideo.addMarker('play3',5.8,8.6)
        this.mark5 = this.mainVideo.addMarker('play4',8.6,12)

        this.mainVideo.playMarker('init');

        this.input.once('pointerup',  function(){
             if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            }
            else {
                this.scale.startFullscreen();
            }
        }, this)

        this.hand = this.add.sprite(window.innerWidth*0.8,window.innerHeight*0.9, 'hand').setScale(0.25).setAlpha(0)
        this.handTween = this.tweens.add({targets: this.hand, scale:{value:'-0.1'},duration: 500, yoyo:true,paused:true, repeat:-1, callbackScope: this ,ease: 'sine.inOut'})
        this.hand.setInteractive()

        this.logoCTA = this.add.sprite(window.innerWidth*0.5, window.innerHeight*-1, 'logo').setOrigin(0.5).setScale(0.6).setAlpha(0)


        this.buttonContainer = this.add.container()
        this.buttonCTA = this.add.sprite(0,0, 'ctabtn').setOrigin(0.5)
        this.textCTA = this.add.text(0,0, 'PLAY NOW', this.style1).setOrigin(0.5).setScale(1)
        this.buttonContainer.add(this.buttonCTA)
        this.buttonContainer.add(this.textCTA)
        this.buttonContainer.setScale(0.6).setAlpha(0)
        //this.buttonContainer.x = this.buttonCTA.displayWidth*0.25
        Phaser.Display.Align.In.Center(this.buttonContainer,this.add.zone(window.innerWidth*0.5, window.innerHeight*0.65, window.innerWidth, window.innerHeight));

        this.interaction1 = false 
        this.interaction2 = false 
        this.interaction3 = false 
        this.interaction4 = false 
        this.interaction5 = false 
    }

    update(){
        if(this.mainVideo.getCurrentTime() > 0.9 && !this.interaction1){
            log(1)
            this.interaction1 = true
            this.hand.setPosition(window.innerWidth*0.8,window.innerHeight*0.9)
            this.hand.setAlpha(1)
            this.handTween.paused = false
            this.hand.once('pointerdown', this.firstEvent, this);
        }
        else if(this.mainVideo.getCurrentTime() > 3.9 && !this.interaction2){
            log(2)
            this.interaction2 = true
            this.hand.setPosition(window.innerWidth*0.8,window.innerHeight*0.9)
            this.hand.setAlpha(1)
            this.handTween.paused = false
            this.hand.once('pointerdown', this.firstEvent2, this);
        }
        else if(this.mainVideo.getCurrentTime() > 5.8 && !this.interaction3){
            log(3)
            this.interaction3 = true
            this.hand.setPosition(window.innerWidth*0.8,window.innerHeight*0.9)
            this.hand.setAlpha(1)
            this.handTween.paused = false
            this.hand.once('pointerdown', this.firstEvent3, this);
        }
        else if(this.mainVideo.getCurrentTime() > 8.5 && !this.interaction4){
            log(4)
            this.interaction4 = true
            this.hand.setPosition(window.innerWidth*0.8,window.innerHeight*0.9)
            this.hand.setAlpha(1)
            this.handTween.paused = false
            this.hand.once('pointerdown', this.firstEvent4, this);
        }
        else if(this.mainVideo.getCurrentTime() > 11.8 && !this.interaction5){
            log(5)
            this.interaction5 = true
            this.hand.setAlpha(0)
            this.handTween.paused = true
            this.startCTA()
        }

    }

    firstEvent(){
        this.handTween.paused = true
        this.hand.alpha = 0
        this.mainVideo.playMarker('play1');

    }

    firstEvent2(){
        this.handTween.paused = true
        this.hand.alpha = 0
        this.mainVideo.playMarker('play2');
    }

    firstEvent3(){
        this.handTween.paused = true
        this.hand.alpha = 0
        this.mainVideo.playMarker('play3');
    }

    firstEvent4(){
        this.handTween.paused = true
        this.hand.alpha = 0
        this.mainVideo.playMarker('play4');
    }

    firstEvent5(){
        this.mainVideo.playMarker('play5');
    }

    setCTA(){
        
    }
  
    startCTA(){
        this.logoCTA.setAlpha(1)
        this.buttonContainer.setAlpha(1)
        this.tweens.add({targets: this.logoCTA, y: window.innerHeight*0.25, duration: 500,  ease: 'sine.inOut'});

        this.tweens.add({targets: this.buttonContainer, scale:{value:0.5}, duration: 500,  ease: 'sine.inOut',
            onComplete:()=>{
                this.tweens.add({targets: this.buttonContainer, scale: {value: this.buttonContainer.scaleX+0.05}, duration: 800,  ease: 'sine.inOut', yoyo:true, loop:-1}); 
            }
        }); 

        this.input.on('pointerdown', this.onClickDownload)
    }

    resize (gameSize, baseSize, displaySize, resolution){
        const width = gameSize.width;
        const height = gameSize.height;
        var isLandscape = height / width  < 1.3 ? true: false;

        //this.scaleSprite(this.logo,window.innerWidth,window.innerHeight/3, 0.5)
        //GAME
        if(!isLandscape){
            //this.scaleSprite(this.mainVideo,window.innerWidth/2,window.innerHeight/2, 0.5)
            this.mainVideo.displayWidth = width
            this.mainVideo.displayHeight = height
            //this.scaleSprite(this.mainVideo,window.innerWidth/2,window.innerHeight/2, 0.5)
            //this.logo.setScale(0.5)
           // this.logo.x = width*0.5
           // this.logo.y = height*0.15
            //this.mainVideo.setSize(width*0.5, height*0.5)
            //this.mainVideo.setDisplaySize(width*0.5, height*0.5)
            log(width,height)
            this.mainVideo.x = width*0.5
            this.mainVideo.y = height*0.5

            this.hand.setPosition(window.innerWidth*0.8,window.innerHeight*0.9)
           
           
        }
        else{
            this.mainVideo.displayWidth = width*0.5
            this.mainVideo.displayHeight = height
            //this.scaleSprite(this.mainVideo,window.innerWidth/2,window.innerHeight, 1)
            //this.mainVideo.setSize(width, height)
            //this.mainVideo.setDisplaySize(width*0.2, height*0.2)
            this.mainVideo.x = width*0.5
            this.mainVideo.y = height*0.5

            this.hand.setPosition(window.innerWidth*0.65,window.innerHeight*0.9)
        }
    }       
}

let config = {
    type: Phaser.WEBGL,
    scene: Game,
    scale: {
       mode: Phaser.Scale.RESIZE,
       autoCenter: Phaser.Scale.CENTER_BOTH,
       width: window.innerWidth,
       height: window.innerHeight,
       autoRound: true,
       antialias: true
    }
}
new Phaser.Game(config)