import './styles/style.css'
import { Game } from './core/Game'
await document.fonts.load('16px PixelFont')
const game = new Game()

await game.init()

game.start()