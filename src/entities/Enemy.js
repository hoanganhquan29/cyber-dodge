import * as PIXI from 'pixi.js'

export class Enemy {

    constructor(x, y) {

        this.sprite = new PIXI.Graphics()

        this.sprite.circle(0, 0, 25)
        this.sprite.fill(0xff0000)

        this.sprite.x = x
        this.sprite.y = y

        this.speed = 2

        this.radius = 25
    }

    update(player, deltaTime) {

        let dx = player.sprite.x - this.sprite.x
        let dy = player.sprite.y - this.sprite.y

        const length = Math.sqrt(dx * dx + dy * dy)

        if (length > 0) {

            dx /= length
            dy /= length
        }

        this.sprite.x += dx * this.speed * deltaTime
        this.sprite.y += dy * this.speed * deltaTime
    }
}