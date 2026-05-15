import * as PIXI from 'pixi.js'

export class GameplayBackground {

    constructor(app) {

        this.app = app

        this.container = new PIXI.Container()

        this.container.zIndex = -100

        this.app.stage.addChild(this.container)

        this.init()
    }

    async init() {

        try {

            const texture = await PIXI.Assets.load(
                '/assets/images/game-bg.png'
            )

            this.sprite = new PIXI.Sprite(texture)

            this.sprite.width = this.app.screen.width
            this.sprite.height = this.app.screen.height

            this.sprite.x = 0
            this.sprite.y = 0

            this.container.addChild(this.sprite)

        } catch (error) {

            console.error('Không tải được game background:', error)
        }
    }
}