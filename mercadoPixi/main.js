let log = console.log

// Crear una aplicación Pixi
const app = new PIXI.Application({
    resizeTo: window,
    autoDensity: true,
});

await app.init();

document.body.appendChild(app.canvas); 

if (document.documentElement.webkitRequestFullscreen) 
    document.documentElement.webkitRequestFullscreen();
// load the texture we need

const texturebgP = await PIXI.Assets.load('./assets/bg_p1.png');
const texturebgL = await PIXI.Assets.load('./assets/bg_l1.png');

const bg = new PIXI.Sprite(texturebgP);
app.stage.addChild(bg);

const texture = await PIXI.Assets.load('./assets/logo_inicio.png');
const logo = new PIXI.Sprite(texture);
logo.position.set(app.renderer.width*0.5,app.renderer.height*0.2)
logo.anchor.set(0.5);
app.stage.addChild(logo);
//console.log(PIXI.isMobile.android.phone);

function resize() {
    var isLandscape = window.innerHeight / window.innerWidth  < 1.3 ? true: false;
    //app.view.style.width = window.innerWidth + 'px';
    //app.view.style.height = window.innerHeight + 'px';
    app.renderer.resize(window.innerWidth,window.innerHeight);

    if(!isLandscape){
        bg.texture = texturebgP
        bg.setSize(window.innerWidth, window.innerHeight)

        logo.scale.set(0.5)
        logo.position.set(app.renderer.width*0.5,app.renderer.height*0.2)
    }
    else{
        bg.texture = texturebgL
        bg.setSize(window.innerWidth, window.innerHeight)

        logo.scale.set(0.6)
        logo.position.set(app.renderer.width*0.5,app.renderer.height*0.3)
    }

}

window.addEventListener('resize', resize);

resize();