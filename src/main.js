import './styles/style.css'
import * as PIXI from 'pixi.js'

const app = new PIXI.Application()

await app.init({
    width: 1280,
    height: 720,
    background: '#111111'
})

document.body.appendChild(app.canvas)

const player = new PIXI.Graphics()

player.circle(0, 0, 30)
player.fill(0x00ff00)

player.x = 640
player.y = 360

app.stage.addChild(player)