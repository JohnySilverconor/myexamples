//configuration for your game: width,height, defining physics
import 'phaser'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {

    type: Phaser.AUTO,
    backgroundColor:"#ffffe0" ,
    scale:{
parent: 'phaser-game',
mode:Phaser.Scale.FIT,
autoCenter: Phaser.Scale.CENTER_BOTH,
width:DEFAULT_WIDTH,
height: DEFAULT_HEIGHT
    }
}
window.addEventListener('load', ()=>{
    const game = new Phaser.Game(config)
})