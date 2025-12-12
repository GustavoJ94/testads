
var game = new Phaser.Game({
	width: "100",
	height: "100",
	parent: "game-holder",
	renderer: Phaser.CANVAS,
	state: this
});

//GAME OPTIONS//

function onClickDownload(){
	FbPlayableAd.onCTAClick(); //Facebook
	//ExitApi.exit();
}

function preload() {
	//GAME OPTIONS//
	this.bgColor = "#000000"; //Background Color
	this.contentColor = 0x3b395b; //Content Game color
	this.minWidth = 480;
	this.minHeight = 720;
	this.textStyle = { font: "bold 38px Arial", fill: "#FFFFFF",align: "left"};//great
	this.textStyle2 = { font: "bold 26px Arial", fill: "#FFFFFF", align: "left" }; 
	this.textStyle3 = { font: "bold 26px Arial", fill: "#FFFFFF", align: "center" }; 
	game.stage.backgroundColor = this.bgColor;

	var atlasJson = '{"frames":[{"filename":"bg.png","frame":{"x":2,"y":878,"w":480,"h":720},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":480,"h":720},"sourceSize":{"w":480,"h":720}},{"filename":"bgdisko.png","frame":{"x":306,"y":353,"w":199,"h":320},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":199,"h":320},"sourceSize":{"w":199,"h":320}},{"filename":"btn1.png","frame":{"x":2,"y":216,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn1_2.png","frame":{"x":404,"y":139,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn2.png","frame":{"x":332,"y":139,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn2_2.png","frame":{"x":74,"y":216,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn3.png","frame":{"x":146,"y":216,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn3_2.png","frame":{"x":218,"y":216,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn4.png","frame":{"x":290,"y":216,"w":70,"h":75},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":70,"h":75},"sourceSize":{"w":70,"h":75}},{"filename":"btn_disko.png","frame":{"x":2,"y":353,"w":150,"h":115},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":150,"h":115},"sourceSize":{"w":150,"h":115}},{"filename":"btn_skate.png","frame":{"x":154,"y":353,"w":150,"h":115},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":150,"h":115},"sourceSize":{"w":150,"h":115}},{"filename":"download.png","frame":{"x":2,"y":675,"w":255,"h":70},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":255,"h":70},"sourceSize":{"w":255,"h":70}},{"filename":"girl_party_idle_1.png","frame":{"x":266,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_party_idle_2.png","frame":{"x":332,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_party_idle_3.png","frame":{"x":200,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_party_idle_4.png","frame":{"x":134,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_question_idle_1.png","frame":{"x":134,"y":139,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_question_idle_2.png","frame":{"x":266,"y":139,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_question_idle_3.png","frame":{"x":200,"y":139,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_question_idle_4.png","frame":{"x":68,"y":139,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_1.png","frame":{"x":2,"y":139,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_2.png","frame":{"x":398,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_3.png","frame":{"x":68,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_4.png","frame":{"x":2,"y":89,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_5.png","frame":{"x":113,"y":39,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_6.png","frame":{"x":179,"y":39,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_7.png","frame":{"x":245,"y":39,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_8.png","frame":{"x":311,"y":39,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"girl_rink_animated_9.png","frame":{"x":377,"y":39,"w":64,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":48},"sourceSize":{"w":64,"h":48}},{"filename":"hand.png","frame":{"x":362,"y":216,"w":100,"h":135},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":135},"sourceSize":{"w":100,"h":135}},{"filename":"tile0.png","frame":{"x":150,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile0_2.png","frame":{"x":224,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile1.png","frame":{"x":113,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile1_2.png","frame":{"x":2,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile2.png","frame":{"x":76,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile2_2.png","frame":{"x":446,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile3.png","frame":{"x":39,"y":39,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile3_2.png","frame":{"x":2,"y":39,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile4.png","frame":{"x":76,"y":39,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile5.png","frame":{"x":298,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile6.png","frame":{"x":335,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile7.png","frame":{"x":409,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile8.png","frame":{"x":372,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile9.png","frame":{"x":187,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile10.png","frame":{"x":261,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"tile11.png","frame":{"x":39,"y":2,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35}},{"filename":"title.png","frame":{"x":2,"y":747,"w":394,"h":129},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":394,"h":129},"sourceSize":{"w":394,"h":129}}],"meta":{"app":"http://www.codeandweb.com/texturepacker","version":"1.0","image":"assets.png","format":"RGBA8888","size":{"w":507,"h":1600},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:87bae7723123f1a4da2710ef06fcfa69:9cb9042c55ce6b206e3b0cc1d63b159f:a759b6bbc8381ac9c472b28f589ad0d6$"}}';
	var data = JSON.parse(atlasJson);

	var atlasImage = 'data:image/png;base64,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O/+QOq63MIe93L/75CvYJ9qno0+9fy/x+8zs3zsH+TLZy7X9J2VkK5/97DD2ncd15TH9mAN6Ge0fTTign9b+UMIB/QT79vwq9h308vRJ60Gda7b22RfsODt2yn4gh/0y+4Id54oNZd/fpfY65/nLsX9RHs3rS6aPs1/h377bk7/uF/tX8QsTzuBjr2ev6MdveNBJrmO6U30b94q+lWd9r7gXWod05qif+85jX4z9+vH0F2/Ere9b7jUXrcSdvLhzuO6lH247y/Js53/Ky04Jb/2EfTH2U9ub6btJ67odr505Gtds2fnUZO3j9Yy9s6R3yfJer9eG36d1vd7k2+ecAbrL/gcD/qY0zuX0+9tZtvQ89pE5esT++vO89v0dyX/txtQVYm3dWr/nUa1zOf2LBX9rccKHM9LZf32nnU/V0b5in8lKcwu2NMd2li6dU/3PZGHfu5/Hw74G9idDEm8fH+yxxx577LHHHnvsK2Yf5pfTPr4p7LHHHnvssccee2n/sh0ddtFAo/HHdnTYRQONxh/Z0WEXDag+XHTYVR8uf2lHh100EKPrqWGPPfbYY4899tgbt7/ezssaEQ2odv5YI/52/kgj/nZ0+mb2t/OXGlHtxG/Oe8d5sccee+yxxx577E3ai1yvEX97tBPfjpnjt9hjjz322GOPPfbZ7MmkxOAMgD322GOPPfbYY499LWeA/PfbIdgT7An2BHtS9RkAe+yxxx577LHHHvtazgCafaYQ7An2BHuCPanwDIA99thjjz322GOPPfbYY4899thjT7An1bFPMQNE9ryCPfbYY4899thjj3217YfsnIyNNwj22GOPPfbYY4899t1nnyLYY4899thjjz322GOPPfbYY4899gR70lUzgA479tgT7An2BHtSiRkgMtrNY489wZ5gT7An9Q322B+qUPzjd6BCST9VzybnUux71v7nsMcee+yxx75UezG9z1coagYQ0/utCiX9DIB979rvT87bsO9C+4mygz322GNv0P58JdNovFXJYI899thjjz32vWA/OHi2nK/92FfN/mxZwR577LHHHnvsscd+suzVp+I0f4t7EvuK2m/cIbJOOg3J33bsl2jqtxPitxPqt1H5hxvkb6vkb7vlb2sUd+APsa+o/W7pskPZK6b9ATRlr35T9iflb9vlb9sCzZwNbQZ77LHHHnvssccee+yx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';
    this.game.load.atlas('atlas', atlasImage, null, data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

	game.flexcale = game.plugins.add(Phaser.Plugin.Flexcale);
	game.flexcale.setOptions({
		minWidth: this.minWidth,
		minHeight: this.minHeight,
		resolution: 1,
	});
}

function CTA(){
	this.tiles.removeAll();
	this.btn_1.kill();
	this.btn_2.kill();
	this.btn_3.kill();
	this.title.kill();
	this.textCTA.bringToTop();
	this.textCTA2.bringToTop();

	if(this.screenOption == 1){
		this.graphics.clear();
		this.graphics.beginFill(0x000000);
		this.graphics.drawRect(0, 0, this.minWidth, this.minHeight*0.75);
		this.graphics.endFill();
		this.graphics.beginFill(0x161616);
		this.graphics.drawRect(0, this.minHeight*0.75, this.minWidth, this.minHeight);
		this.graphics.endFill();
		this.btn_4.kill();
		this.bgDisko.revive();
		this.line.revive();
		this.girlDisko.revive();
	}
	else{
		this.graphics.clear();
		this.graphics.beginFill(0x272d3b);
		this.graphics.drawRect(0, 0, this.minWidth, this.minHeight*0.5);
		this.graphics.endFill();
		this.graphics.beginFill(0xFFFFFF);
		this.graphics.drawRect(0, this.minHeight*0.5, this.minWidth, this.minHeight);
		this.graphics.endFill();
		this.girlSkate.revive();
	}
	this.textCTA.visible = true;
	this.textCTA2.visible = true;
	this.btn_donwload.visible = true;
	this.btn_donwload.bringToTop();
	this.btnTween.start();
}

function tileDown(tile, pointer) {
    this.hand.kill();
    tile.active = true;
    var flag = false;

		if(this.screenOption == 1){
			if (this.color == 1 && tile.frameName == 'tile1.png') {
		    	tile.frameName = 'tile5.png';
		    }
		    else if (this.color == 2 && tile.frameName == 'tile2.png'){
		    	tile.frameName = 'tile6.png';
		    }
		    else if (this.color == 3 && tile.frameName == 'tile3.png'){
		    	tile.frameName = 'tile7.png';
		    }
    		else if (this.color == 4 && tile.frameName == 'tile4.png'){
		    	tile.frameName = 'tile8.png';
		    }

			this.tiles.forEach(function (tile) {
				if(tile.frameName != 'tile0.png' && tile.active == false){
					flag = true; 
				}
			},this);

			if (flag == false){
			   this.game.time.events.add(1500,CTA,this);
			}
	}
	else if(this.screenOption == 2){
		if (this.color == 1 && tile.frameName == 'tile1_2.png') {
		    	tile.frameName = 'tile9.png';
		    }
		    else if (this.color == 2 && tile.frameName == 'tile2_2.png'){
		    	tile.frameName = 'tile10.png';
		    }
		    else if (this.color == 3 && tile.frameName == 'tile3_2.png'){
		    	tile.frameName = 'tile11.png';
		    }

			this.tiles.forEach(function (tile) {
				if(tile.frameName != 'tile0_2.png' && tile.active == false){
					flag = true; 
				}
			},this);

			if (flag == false){
			   this.game.time.events.add(1500,CTA,this);
			}
	}
}

function addTile(x, y,frame,number) {
	if(this.screenOption == 1)
		var name = 'tile'+frame+'.png';
	else
		var name = 'tile'+frame+'_2.png'

    var tile = this.tiles.create(x * 35, y * 35 ,'atlas',name);
    tile.anchor.setTo(0.5, 0.5);
    tile.inputEnabled = true;
    tile.number = number;
    tile.active = false;
    tile.events.onInputDown.add(tileDown, this);
    return tile;
}

function initTiles() {
	if(this.screenOption == 1){
		for (var i = 0; i < 8; i++) {
	        for (var j = 0; j < 8; j++) {
	            var tile = this.addTile(j,i,this.libGrid[i][j]);
		    }
	    }
	}
	else{
		for (var i = 0; i < 8; i++) {
	        for (var j = 0; j < 8; j++) {
	            var tile = this.addTile(j,i,this.skateGrid[i][j]);
		    }
	    }
	}
}

function setColor(button,t,y,type) {
	resetButtons(button);
	this.color = type;
}

function resetButtons(button){
	this.btn_1.scale.set(1);
	this.btn_2.scale.set(1);
	this.btn_3.scale.set(1);
	if(this.screenOption == 1)
		this.btn_4.scale.set(1);
	button.scale.set(1.1);
}

function eraseScreen(){
	this.bg.kill();
	this.girl.kill();
	this.text.kill();
	this.btnDisko.kill();
	this.btnSkate.kill();
	this.graphics.beginFill(0xFFFFFF);
	this.graphics.drawRect(0, 0, this.minWidth, this.minHeight);
	this.graphics.endFill();
}

function onClickDisko(){
	setDisko();
	initTiles();
}

function onClickSkate(){
	setSkate();
	initTiles();
}

function setDisko(){
	eraseScreen();
	this.screenOption = 1;
	this.hand.visible = true;
	this.handTween.start();
    this.title.alpha = 1;

	this.btn_1 = game.add.sprite(0, 0, 'atlas','btn1.png');
    this.btn_1.anchor.set(0.5);
    this.btn_1.position.x += this.btn_1.width*1.5;
    this.btn_1.position.y += (this.minHeight-this.btn_1.height);
  	this.btn_1.scale.set(1.1);
	this.btn_1.inputEnabled = true;
	this.btn_1.events.onInputUp.add(setColor,this,0,1);

    this.btn_2 = game.add.sprite(0, 0, 'atlas','btn2.png');
    this.btn_2.anchor.set(0.5);
    this.btn_2.position.x += this.btn_2.width*2.9;
    this.btn_2.position.y += (this.minHeight-this.btn_2.height);
	this.btn_2.inputEnabled = true;
	this.btn_2.events.onInputUp.add(setColor,this,0,2);

    this.btn_3 = game.add.sprite(0, 0, 'atlas','btn3.png');
    this.btn_3.anchor.set(0.5);
    this.btn_3.position.x += this.btn_3.width*4.2;
    this.btn_3.position.y += (this.minHeight-this.btn_3.height);
    this.btn_3.inputEnabled = true;
	this.btn_3.events.onInputUp.add(setColor,this,0,3);

    this.btn_4 = game.add.sprite(0, 0, 'atlas','btn4.png');
    this.btn_4.anchor.set(0.5);
    this.btn_4.position.x += this.btn_4.width*5.5;
    this.btn_4.position.y += (this.minHeight-this.btn_4.height);
	this.btn_4.inputEnabled = true;
	this.btn_4.events.onInputUp.add(setColor,this,0,4);

	this.bgDisko = game.add.sprite(this.minWidth*0.3, this.minHeight*0.52, 'atlas','bgdisko.png');
    this.bgDisko.anchor.set(0.5);
	this.bgDisko.kill();

	this.line = game.add.graphics(0, 0);
	this.line.beginFill(0x5E2B16);
	this.line.drawRect(122, 0, 7,this.minHeight*0.38);
	this.line.endFill();
	this.line.kill();

   	this.girlDisko = game.add.sprite(this.minWidth*0.5, this.minHeight*0.6, 'atlas','girl_party_idle_1.png');
    this.girlDisko.animations.add('run', Phaser.Animation.generateFrameNames('girl_party_idle_', 1, 4,'.png'), 4, true);
    this.girlDisko.animations.play('run');
    this.girlDisko.anchor.set(0.5);
	this.girlDisko.scale.set(7);
	this.girlDisko.smoothed = false;
	this.girlDisko.kill();

    this.graphics.addChild(this.btn_1);
    this.graphics.addChild(this.btn_2);
    this.graphics.addChild(this.btn_3);
    this.graphics.addChild(this.btn_4);
    this.graphics.addChild(this.tiles);
    this.graphics.addChild(this.bgDisko);
    this.graphics.addChild(this.line);
    this.graphics.addChild(this.girlDisko);
    this.hand.bringToTop();
    this.tiles.x = this.minWidth*0.20;
    this.tiles.y = this.minHeight*0.25;
}

function setSkate(){
	eraseScreen();
	this.screenOption = 2;
	this.hand.visible = true;
	this.handTween.start();
    this.title.alpha = 1;

	this.btn_1 = game.add.sprite(0, 0, 'atlas','btn1_2.png');
    this.btn_1.anchor.set(0.5);
    this.btn_1.position.x += this.btn_1.width*2;
    this.btn_1.position.y += (this.minHeight-this.btn_1.height);
	this.btn_1.scale.set(1.1);
	this.btn_1.inputEnabled = true;
	this.btn_1.events.onInputUp.add(setColor,this,0,1);

    this.btn_2 = game.add.sprite(0, 0, 'atlas','btn2_2.png');
    this.btn_2.anchor.set(0.5);
    this.btn_2.position.x += this.btn_2.width*3.25;
    this.btn_2.position.y += (this.minHeight-this.btn_2.height);
	this.btn_2.inputEnabled = true;
	this.btn_2.events.onInputUp.add(setColor,this,0,2);

    this.btn_3 = game.add.sprite(0, 0, 'atlas','btn3_2.png');
    this.btn_3.anchor.set(0.5);
    this.btn_3.position.x += this.btn_3.width*4.5;
    this.btn_3.position.y += (this.minHeight-this.btn_3.height);
	this.btn_3.inputEnabled = true;
	this.btn_3.events.onInputUp.add(setColor,this,0,3);

    this.girlSkate = game.add.sprite(this.minWidth*0.5, this.minHeight*0.5, 'atlas','girl_rink_animated_1.png');
    this.girlSkate.animations.add('run', Phaser.Animation.generateFrameNames('girl_rink_animated_', 1, 9,'.png'), 6, true);
    this.girlSkate.animations.play('run');
    this.girlSkate.anchor.set(0.5);
	this.girlSkate.scale.set(7.5);
	this.girlSkate.smoothed = false;
	this.girlSkate.kill();

    this.graphics.addChild(this.btn_1);
    this.graphics.addChild(this.btn_2);
    this.graphics.addChild(this.btn_3);
    this.graphics.addChild(this.tiles);
    this.graphics.addChild(this.girlSkate);
    this.hand.bringToTop();
    this.tiles.x = this.minWidth*0.25;
    this.tiles.y = this.minHeight*0.25;
}

function create() {
	this.color = 1;
	this.screenOption = 0;

	this.libGrid = [
            [0,0,0,4,4,0,0,0],
            [0,0,0,4,4,4,0,0],
            [0,0,0,4,4,4,0,0],
            [0,0,0,4,4,4,0,0],
            [0,0,0,2,2,3,0,0],
            [0,0,0,1,1,1,0,0],
            [0,0,0,1,1,1,0,0],
            [0,0,0,1,1,1,0,0]
    ];

    this.skateGrid = [
         	[0,0,0,0,3,3,3,0],
            [0,0,0,0,3,3,3,0],
            [0,0,0,3,3,3,3,3],
            [0,0,3,3,3,3,3,3],
            [0,3,3,3,3,2,2,2],
            [0,2,2,2,2,0,2,2],
            [1,0,1,0,0,0,1,0],
            [0,1,1,1,1,1,1,1]
    ];

    this.tiles = this.game.add.group();

	this.graphics = game.add.graphics(0, 0);
	this.graphics.beginFill(this.contentColor);
	this.graphics.drawRect(0, 0, this.minWidth, this.minHeight);
	this.graphics.endFill();
    /////////////////////////////
    
    this.bg = game.add.sprite(this.minWidth*0.5, this.minHeight*0.5, 'atlas','bg.png');
    this.bg.anchor.set(0.5);

	this.title = game.add.sprite(0, 0, 'atlas','title.png');
    this.title.anchor.set(0.5);
    this.title.position.x += this.title.width*0.6;
    this.title.position.y += this.title.height*0.6;
    this.title.alpha = 0;

    this.girl = game.add.sprite(this.minWidth*0.5, this.minHeight*0.37, 'atlas','girl_question_idle_1.png');
    this.girl.animations.add('run', Phaser.Animation.generateFrameNames('girl_question_idle_', 1, 4,'.png'), 4, true);
    this.girl.animations.play('run');
    this.girl.anchor.set(0.5);
	this.girl.scale.set(8);
	this.girl.smoothed = false;

    this.text = game.add.text(this.minWidth*0.5, this.minHeight*0.72, "HELP CINDY\nTO CHOOSE FROM:", this.textStyle);
    this.text.anchor.set(0.5);
    this.text.lineSpacing = -10;

	this.btnDisko = game.add.sprite(this.minWidth*0.3, this.minHeight*0.9, 'atlas','btn_disko.png');
    this.btnDisko.anchor.set(0.5);
    this.btnDisko.inputEnabled = true;
	this.btnDisko.events.onInputUp.add(onClickDisko,this);
	
	this.btnSkate = game.add.sprite(this.minWidth*0.7, this.minHeight*0.9, 'atlas','btn_skate.png');
    this.btnSkate.anchor.set(0.5);
	this.btnSkate.inputEnabled = true;
	this.btnSkate.events.onInputUp.add(onClickSkate,this);

	this.hand = game.add.sprite(this.minWidth*0.5, this.minHeight*0.65, 'atlas','hand.png');
    this.hand.anchor.set(0.5);
    this.hand.visible = false;
    this.handTween = this.game.add.tween(this.hand.scale).to({x:this.hand.scale.x*1.2, y:this.hand.scale.y*1.2}, 1000, Phaser.Easing.Quadratic.InOut,false,0,-1,true);

    this.textCTA = game.add.text(this.minWidth*0.5, this.minHeight*0.05, "WELL DONE!", this.textStyle);
    this.textCTA.anchor.set(0.5);
    this.textCTA.lineSpacing = -10;
	this.textCTA.visible = false;

    this.textCTA2 = game.add.text(this.minWidth*0.5, this.minHeight*0.12, "Now complete her image\nin the App Store", this.textStyle3);
    this.textCTA2.anchor.set(0.5);
    this.textCTA2.lineSpacing = -10;
	this.textCTA2.visible = false;

    this.btn_donwload = game.add.sprite(0, 0, 'atlas','download.png');
    this.btn_donwload.anchor.set(0.5);
    this.btn_donwload.position.x += this.minWidth*0.5;
    this.btn_donwload.position.y += (this.minHeight-this.btn_donwload.height);
   	this.btn_donwload.visible = false;
	this.btn_donwload.inputEnabled = true;
	this.btn_donwload.events.onInputUp.add(onClickDownload,this);

    this.btnTween = this.game.add.tween(this.btn_donwload.scale).to({x:this.btn_donwload.scale.x*1.2, y:this.btn_donwload.scale.y*1.2}, 1000, Phaser.Easing.Quadratic.InOut,false,0,-1,true);
    ////////////////////////////////
    this.graphics.addChild(this.bg);
    this.graphics.addChild(this.title);
    this.graphics.addChild(this.girl);
    this.graphics.addChild(this.text);
    this.graphics.addChild(this.btnDisko);
    this.graphics.addChild(this.btnSkate);
    this.graphics.addChild(this.hand);
    this.graphics.addChild(this.textCTA);
    this.graphics.addChild(this.textCTA2);
    this.graphics.addChild(this.btn_donwload);

	game.flexcale.onResize.add(function (scale) {
		this.graphics.scale.setTo(scale);
		this.graphics.alignIn(game.world, Phaser.CENTER);
	});

	game.flexcale.resize();
}