import * as PIXI from 'pixi.js'

export class StartMenu {

    constructor(app) {

        this.app = app

        this.container = new PIXI.Container()

        this.title = new PIXI.Text({
            text: 'CYBER DODGE',
            style: {
                fill: '#ffffff',
                fontSize: 64,
                fontWeight: 'bold'
            }
        })

        this.title.anchor.set(0.5)

        this.title.x = window.innerWidth / 2
        this.title.y = window.innerHeight / 2 - 100

        this.startText = new PIXI.Text({
            text: 'Press ENTER to Start',
            style: {
                fill: '#00ff00',
                fontSize: 32
            }
        })

        this.startText.anchor.set(0.5)

        this.startText.x = window.innerWidth / 2
        this.startText.y = window.innerHeight / 2 + 20

        this.container.addChild(this.title)
        this.container.addChild(this.startText)

        this.app.stage.addChild(this.container)
    }

    show() {

        this.container.visible = true
    }

    hide() {

        this.container.visible = false
    }
}