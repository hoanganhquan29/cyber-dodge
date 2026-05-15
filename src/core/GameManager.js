import { Player } from '../entities/Player'
import { InputManager } from './InputManager'
import { EnemySpawner } from '../systems/EnemySpawner'
import { CollisionSystem } from '../systems/CollisionSystem'
import { ScoreSystem } from '../systems/ScoreSystem'
import * as PIXI from 'pixi.js'
import { StartMenu } from '../ui/StartMenu'
import { HUD } from '../ui/HUD'
import { GameOverScreen } from '../ui/GameOverScreen'
import { AudioSystem } from '../systems/AudioSystem'

export class GameManager {

    constructor(app) {

        this.app = app

        this.input = new InputManager()

        this.player = new Player(640, 360)

        this.app.stage.addChild(this.player.sprite)

        this.enemySpawner = new EnemySpawner(this.app) 

        this.startMenu = new StartMenu(this.app)
        this.gameState = 'MENU'

        this.hud = new HUD(this.app)

this.gameOverScreen = new GameOverScreen(this.app)

this.scoreSystem = new ScoreSystem(this.hud)

this.audioSystem = new AudioSystem()


    }

    update(deltaTime) {
        if (this.gameState === 'MENU') {

    if (this.input.isKeyDown('enter')) {

        this.startGame()
    }

    return
}

        if (this.gameState === 'GAME_OVER') {

    if (this.input.isKeyDown('r')) {

        this.restart()
    }

    return
}

    if (this.gameState !== 'PLAYING') {
        return
    }

    this.player.update(this.input, deltaTime)

    this.enemySpawner.update(this.player, deltaTime)

    this.scoreSystem.update(deltaTime)

    for (const enemy of this.enemySpawner.enemies) {

        const collided = CollisionSystem.checkCircleCollision(
            this.player,
            enemy
        )

        if (collided) {
            this.audioSystem.playHitSound()

            this.gameOver()
        }
    }
}
gameOver() {

    this.gameState = 'GAME_OVER'

    this.audioSystem.playGameOverSound()

    this.audioSystem.stopBackgroundMusic()

    this.gameOverScreen.show()
}
restart() {

    for (const enemy of this.enemySpawner.enemies) {

        this.app.stage.removeChild(enemy.sprite)
    }

    this.enemySpawner.enemies = []

    this.player.sprite.x = window.innerWidth / 2
    this.player.sprite.y = window.innerHeight / 2

    this.scoreSystem.reset()

    this.gameOverScreen.hide()

    this.enemySpawner.spawnTimer = 0

    this.audioSystem.playBackgroundMusic()

    this.gameState = 'PLAYING'
}
startGame() {

    this.startMenu.hide()

    this.player.sprite.visible = true

    this.audioSystem.playBackgroundMusic()

    this.gameState = 'PLAYING'
}
}