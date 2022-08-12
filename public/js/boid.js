import { randomInt } from './math.js'

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
        this.path = new paper.Path.RegularPolygon(this.initialPosition, 3, 15);
        this.path.fillColor = '#626262';
        this.path.rotate(this.velocity.angle + 90);
    }    

    /**
    * Updates the position of the boid
     */
    update() {
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

        this.path.position.y += this.velocity.y
        this.path.position.x += this.velocity.x
        
        this.velocity.add(this.acceleration);
    }
}