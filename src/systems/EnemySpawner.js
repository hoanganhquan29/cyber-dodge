import { Enemy } from '../entities/Enemy'

export class EnemySpawner {

    constructor(app) {

        this.app = app

        this.enemies = []

        this.spawnTimer = 0

        this.spawnInterval = 120
    }

    update(player, deltaTime) {

        this.spawnTimer += deltaTime

        if (this.spawnTimer >= this.spawnInterval) {

            this.spawnEnemy()

            this.spawnTimer = 0
        }

        for (const enemy of this.enemies) {

            enemy.update(player, deltaTime)
        }
    }

    spawnEnemy() {

        const side = Math.floor(Math.random() * 4)

        let x
        let y

        const width = window.innerWidth
        const height = window.innerHeight

        switch (side) {

            case 0:
                x = Math.random() * width
                y = -50
                break

            case 1:
                x = width + 50
                y = Math.random() * height
                break

            case 2:
                x = Math.random() * width
                y = height + 50
                break

            case 3:
                x = -50
                y = Math.random() * height
                break
        }

        const enemy = new Enemy(x, y)

        this.enemies.push(enemy)

        this.app.stage.addChild(enemy.sprite)
    }
}