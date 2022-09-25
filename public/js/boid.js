import { randomInt } from './math.js'

export default class Boid {
    
    /**
     * Boids are a unit in the simulation
     * @param {*} paper The context drawn upon
     *   */
    constructor(paper) {
        this.position = new paper.Point(randomInt(0, window.innerWidth), randomInt(0, window.innerHeight));
        this.velocity = new paper.Point(randomInt(-5, 5), randomInt(-5, 5));
        this.velocity.angle = randomInt(0, 360);
        this.neighborhood = 60
        this.maxVelocity = 5

        this.path = new paper.Path.Circle(this.position,8);
        this.path.fillColor = '#626262';
    }    

    addFlock(boids) {
        this.boids = boids
    }

    applyForce(vectorA, vectorB){
        vectorA.x += vectorB.x
        vectorA.y += vectorB.y
    }

    distanceTo(boid){
        return boid.path.position.subtract(this.path.position).length
    }

    isNeighbor(boid){
        return this.distanceTo(boid) < this.neighborhood
    }

    alignment(paper){
        let force = new paper.Point()
        let neighborhoodCount = 0
        this.boids.forEach(boid => {
            if(boid != this){
                if(this.isNeighbor(boid) && this.distanceTo(boid) > 0){
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
        force.length = 0.8
        return force
    }

    cohesion(paper){
        let force = new paper.Point()
        let neighborhoodCount = 0

        this.boids.forEach(boid => {
            if(boid != this){
                if(this.isNeighbor(boid) && this.distanceTo(boid) > 0){
                    neighborhoodCount +=1
                    force.x += boid.path.position.x
                    force.y += boid.path.position.y
                }
            }
        })
        if(neighborhoodCount > 0){
            force.x /= neighborhoodCount
            force.y /= neighborhoodCount
            force = new paper.Point(force.x - this.path.position.x, force.y - this.path.position.y)
            force.length = 0.6
        }
        return force
    }

    separation(paper){
        let force = new paper.Point()
        let maxDistance = 40 
        let count = 0

        this.boids.forEach(boid => {
            if(boid != this){
                if(this.distanceTo(boid) < maxDistance){
                    count += 1
                    force.x += boid.path.position.x - this.path.position.x
                    force.y += boid.path.position.y - this.path.position.y
                }
            }
        })
        force.x *= -1
        force.y *= -1
        if(count > 0){
            force.length = 1
        }

        return force
    }

    /**
    * Updates the position of the boid
     */
    update(paper) {
        let isTouchingRightBorder = this.path.position.x > window.innerWidth - 30
        let isTouchingLeftBorder = this.path.position.x < 30
        let isTouchingTopBorder = this.path.position.y < 30
        let isTouchingBottomBorder = this.path.position.y > window.innerHeight - 30

                                
        if(isTouchingLeftBorder){
            this.velocity.x -= -2
        }
        if(isTouchingRightBorder){
            this.velocity.x -= 2 
        }
        if(isTouchingTopBorder){
            this.velocity.y -= -2        
        }
        if(isTouchingBottomBorder){
            this.velocity.y -= 2
        }
        

        let ali = this.alignment(paper)
        let sep = this.separation(paper)
        let coh = this.cohesion(paper)
        
        this.applyForce(this.velocity, ali)
        this.applyForce(this.velocity, coh)
        this.applyForce(this.velocity, sep)

        if(this.velocity.length > this.maxVelocity){
            this.velocity.length = this.maxVelocity
        }
        console.log(this.velocity)
        console.log(ali)
        console.log(coh)
        console.log(sep)
        this.applyForce(this.path.position, this.velocity)

    }    
}