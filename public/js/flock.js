import Boid from "./boid.js"


export default class Flock {
    constructor(paper, numberOfBoids) {
        this.numberOfBoids = numberOfBoids;
        this.boids = [];

        for(let index = 0; index < this.numberOfBoids; index++) {
            let boid = new Boid(paper);
            this.boids[index] = boid;
        }

        this.boids.forEach(boid => {
            boid.addFlock(this.boids)
        })
    }

    update(paper) {
        this.boids.forEach(boid => {
            boid.update(paper);
            }
        )
    }
}