import * as PIXI from 'pixi.js'

export class GameOverScreen {

    constructor(app) {

        this.app = app

        this.text = new PIXI.Text({
            text: 'GAME OVER\nPress R to Restart',
            style: {
    fontFamily: 'PixelFont',
    fill: '#ff0000',
    fontSize: 36,
    align: 'center'
}
        })

        this.text.anchor.set(0.5)

        this.text.x = window.innerWidth / 2
        this.text.y = window.innerHeight / 2

        this.text.visible = false

        this.app.stage.addChild(this.text)
    }

    show() {

        this.text.visible = true

        this.text.zIndex = 200
    }

    hide() {

        this.text.visible = false
    }
}