import * as PIXI from 'pixi.js'
import { GameManager } from './GameManager'

export class Game {

    constructor() {

        this.app = new PIXI.Application()

        this.gameManager = null
    }

    async init() {
        window.addEventListener('resize', () => {

    this.app.renderer.resize(
        window.innerWidth,
        window.innerHeight
    )
})

        await this.app.init({
            width: window.innerWidth,
            height: window.innerHeight,
            background: '#111111'
        })

        document.body.appendChild(this.app.canvas)

        this.gameManager = new GameManager(this.app)
    }

    start() {

        this.app.ticker.add((ticker) => {

            this.update(ticker.deltaTime)
        })
    }

    update(deltaTime) {

        this.gameManager.update(deltaTime)
    }
}