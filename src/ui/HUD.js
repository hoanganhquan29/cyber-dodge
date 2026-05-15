import * as PIXI from 'pixi.js'

export class HUD {

    constructor(app) {

        this.app = app

        this.scoreText = new PIXI.Text({
            text: 'Score: 0',
            style: {
    fontFamily: 'PixelFont',
    fill: '#ffffff',
    fontSize: 20
}
        })

        this.scoreText.x = 20
        this.scoreText.y = 20

        this.app.stage.addChild(this.scoreText)

        this.scoreText.zIndex = 100
    }

    updateScore(score) {

        this.scoreText.text = `Score: ${Math.floor(score)}`
    }
}