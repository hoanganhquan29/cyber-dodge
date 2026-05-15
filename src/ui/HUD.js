import * as PIXI from 'pixi.js'

export class HUD {

    constructor(app) {

        this.app = app

        this.scoreText = new PIXI.Text({
            text: 'Score: 0',
            style: {
                fill: '#ffffff',
                fontSize: 32
            }
        })

        this.scoreText.x = 20
        this.scoreText.y = 20

        this.app.stage.addChild(this.scoreText)
    }

    updateScore(score) {

        this.scoreText.text = `Score: ${Math.floor(score)}`
    }
}