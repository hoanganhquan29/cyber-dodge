import { sound } from '@pixi/sound'
export class AudioSystem {

    constructor() {

        this.enabled = true
        sound.add('hit', '/assets/audios/hit.wav')

        sound.add('gameover', '/assets/audios/gameover.wav')

        sound.add('bgm', '/assets/audios/bgm.mp3')
    }

    playBackgroundMusic() {

        if (!this.enabled) {
            return
        }

        sound.play('bgm', {
            loop: true,
            volume: 0.3
        })
    }

    playHitSound() {

        if (!this.enabled) {
            return
        }

        sound.play('hit')
    }

    playGameOverSound() {

        if (!this.enabled) {
            return
        }

        sound.play('gameover')
    }

    stopBackgroundMusic() {

        sound.stop('bgm')
    }

    playGameOverSound() {

        if (!this.enabled) {
            return
        }

        console.log('Play game over sound')
    }

    toggle() {

        this.enabled = !this.enabled
    }
}