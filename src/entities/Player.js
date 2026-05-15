import * as PIXI from 'pixi.js'

export class Player {
    constructor(x, y) {

        this.sprite = new PIXI.Graphics()

        this.sprite.circle(0, 0, 30)
        this.sprite.fill(0x00ff00)

        this.sprite.x = x
        this.sprite.y = y

        this.speed = 5

        this.radius = 30
    }

    update(input, deltaTime) {

    let moveX = 0
    let moveY = 0

    if (input.isKeyDown('w')) {
        moveY = -1
    }

    if (input.isKeyDown('s')) {
        moveY = 1
    }

    if (input.isKeyDown('a')) {
        moveX = -1
    }

    if (input.isKeyDown('d')) {
        moveX = 1
    }

    const length = Math.sqrt(moveX * moveX + moveY * moveY)

    if (length > 0) {
        moveX /= length
        moveY /= length
    }

    this.sprite.x += moveX * this.speed * deltaTime
    this.sprite.y += moveY * this.speed * deltaTime

    const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

if (this.sprite.x < this.radius) {
    this.sprite.x = this.radius
}

if (this.sprite.x > screenWidth - this.radius) {
    this.sprite.x = screenWidth - this.radius
}

if (this.sprite.y < this.radius) {
    this.sprite.y = this.radius
}

if (this.sprite.y > screenHeight - this.radius) {
    this.sprite.y = screenHeight - this.radius
}
}


}