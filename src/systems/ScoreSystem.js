export class ScoreSystem {

    constructor(hud) {

        this.hud = hud

        this.score = 0
    }

    update(deltaTime) {

        this.score += deltaTime / 60

        this.hud.updateScore(this.score)
    }

    reset() {

        this.score = 0

        this.hud.updateScore(this.score)
    }
}