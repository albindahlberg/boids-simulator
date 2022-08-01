import Boid from "./boid.js"
import { randomNumber } from './math.js'


export default class Swarm {
    constructor(number_of_boids) {
        this.number_of_boids = number_of_boids
        this.boids = []

        for(let index = 0; index < this.number_of_boids; index++) {
            const angle = randomNumber(2*Math.PI)
            let boid = new Boid(angle)
            this.boids[index] = boid
        }
    }

    spawn(ctx) {
        this.boids.forEach(boid => {
            boid.draw(ctx)
            }
        )
    }

    update(ctx) {
        this.boids.forEach(boid => {
            boid.update(ctx)
            }
        )
    }
}