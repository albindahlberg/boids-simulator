import Boid from "./boid.js"
import { randomNumber } from './math.js'


export default class Flock {
    constructor(paper, number_of_boids) {
        this.number_of_boids = number_of_boids;
        this.boids = [];

        for(let index = 0; index < this.number_of_boids; index++) {
            let boid = new Boid(paper);
            this.boids[index] = boid;
        }
    }

    update() {
        this.boids.forEach(boid => {
            boid.update();
            }
        )
    }
}