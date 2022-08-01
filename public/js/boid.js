import { randomInt } from './math.js'

export default class Boid {
    
    /**
     * Boids are a unit in the simulation
     * @param {Number} x The position on the x-axis, MAX = window.innerWidth
     * @param {Number} y The position on the y-axis, MAX = window.innerHeight
     * @param {Number} angle The angle in radians the boid is moving from the x-axis. Functions similiarly to the unit circle 
     *   */
    constructor(angle) {
        this.radius = 10
        this.velocity = 3

        this.x = randomInt(this.radius, window.innerWidth - this.radius)  // this.radius to disable croppping upon spawning
        this.y = randomInt(this.radius, window.innerHeight - this.radius) // this.radius to disable croppping upon spawning
        this.angle = angle

        this.dx = Math.cos(this.angle) * this.velocity
        this.dy = -Math.sin(this.angle) * this.velocity // negative so it functions as unit circle
    }    

    /* TODO draw boid as arrow, create rotation etc */
    /**
     * Draw the boid on the canvas
     */
    draw(ctx) {
        ctx.beginPath()

        ctx.fillStyle = '#0101FF'
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.closePath()
    }

    /**
     * Updates the position of the boid
     */
    update(ctx) {
        this.draw(ctx)

        let isTouchingLeftBorder = (this.x + this.radius) < 50
        let isTouchingRightBorder = (this.x + this.radius) > window.innerWidth
        let isTouchingTopBorder = (this.y + this.radius) < 20
        let isTouchingBottomBorder = (this.y + this.radius) > window.innerHeight

        if(isTouchingLeftBorder || isTouchingRightBorder) {
            this.dx = -this.dx
        }
        if(isTouchingBottomBorder || isTouchingTopBorder) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy
    }
}