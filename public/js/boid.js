import { applyForce, randomInt } from './math.js'

export default class Boid {
    
    /**
     * Boids are a unit in the simulation
     * @param {*} paper The context drawn upon
     *   */
    constructor(paper) {
        this.initialPosition = new paper.Point(randomInt(0, window.innerWidth), randomInt(0, window.innerHeight));
        this.velocity = new paper.Point(randomInt(-5, 5), randomInt(-5, 5));
        this.velocity.angle = randomInt(0, 360);
        this.acceleration = new paper.Point(0, 0);
        this.neighborhood = 100

        this.maxVelocity = 5

        this.path = new paper.Path.RegularPolygon(this.initialPosition, 3, 15);
        this.path.fillColor = '#626262';
        this.path.rotate(this.velocity.angle + 90);
    }    

    addFlock(boids) {
        this.boids = boids
    }

    isNeighbor(boid){
        return boid.path.position.subtract(this.path.position).length < this.neighborhood
    }

    alignment(paper){
        let force = new paper.Point()
        let neighborhoodCount = 0
        this.boids.forEach(boid => {
            if(boid != this){
                if(this.isNeighbor(boid)){
                    neighborhoodCount += 1
                    force.x += boid.velocity.x
                    force.y += boid.velocity.y
                }
            }
        })

        if(neighborhoodCount == 0){
            return force
        }

        force.x /= neighborhoodCount
        force.y /= neighborhoodCount
        force.length = 1
        console.log(force)
        console.log(force.length)
        return force
    }


    /**
    * Updates the position of the boid
     */
    update(paper) {
        let isTouchingRightBorder = this.path.position.x > window.innerWidth
        let isTouchingLeftBorder = this.path.position.x < 0
        let isTouchingTopBorder = this.path.position.y < 0
        let isTouchingBottomBorder = this.path.position.y > window.innerWidth

                                
        if(isTouchingLeftBorder){
            this.path.position.x = window.innerWidth
        }
        if(isTouchingRightBorder){
            this.path.position.x = 0
        }
        if(isTouchingTopBorder){
            this.path.position.y = window.innerHeight
        }
        if(isTouchingBottomBorder){
            this.path.position.y = 0
        }

        applyForce(this.path.position, this.velocity)
        applyForce(this.velocity, this.acceleration)

        if(this.velocity.length > this.maxVelocity){
            this.velocity.length = this.maxVelocity
        }

        let ali = this.alignment(paper)
        let sep
        let coh
        applyForce(this.acceleration, ali)

    }    
}