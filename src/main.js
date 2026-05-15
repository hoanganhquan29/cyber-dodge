import './styles/style.css'
import { Game } from './core/Game'

const game = new Game()

await game.init()

game.start()