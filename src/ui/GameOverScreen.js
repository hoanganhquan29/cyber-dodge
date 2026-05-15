import * as PIXI from 'pixi.js'

export class GameOverScreen {

    constructor(app) {

        this.app = app

        this.text = new PIXI.Text({
            text: 'GAME OVER\nPress R to Restart',
            style: {
                fill: '#ff0000',
                fontSize: 48,
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
    }

    hide() {

        this.text.visible = false
    }
}