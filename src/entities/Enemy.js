import * as PIXI from 'pixi.js'

export class Enemy {

    constructor(x, y) {

        this.sprite = PIXI.Sprite.from('/assets/images/enemy.png')

        this.sprite.scale.set(0.08)

        this.sprite.anchor.set(0.5)

        this.sprite.x = x
        this.sprite.y = y

        this.speed = 2

        this.radius = 28

        console.log(this.sprite)
        this.sprite.alpha = 1
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