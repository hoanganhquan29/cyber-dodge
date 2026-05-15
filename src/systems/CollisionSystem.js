export class CollisionSystem {

    static checkCircleCollision(a, b) {

        const dx = a.sprite.x - b.sprite.x
        const dy = a.sprite.y - b.sprite.y

        const distance = Math.sqrt(dx * dx + dy * dy)

        return distance < (a.radius + b.radius)
    }
}