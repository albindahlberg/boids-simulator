import getRandomInt from './math.js'

export default class Boid {
    
    /**
     * Boids are a unit in the simulation
     * @param {Number} x The position on the x-axis, MAX = window.innerWidth
     * @param {Number} y The position on the y-axis, MAX = window.innerHeight
     * @param {Number} angle The angle in degrees the boid is moving from the y-axis 
     *   */
    constructor(angle) {
        
        this.x = getRandomInt(0, window.innerWidth)
        this.y = getRandomInt(0, window.innerHeight)
        this.angle = angle

        this.radius = 10
        this.speed = 3

        this.dx = Math.sin(this.angle) * this.speed
        this.dy = Math.cos(this.angle) * this.speed    
    }    

    /* TODO draw boid as arrow, create rotation etc */
    /**
     * Draw the boid on the canvas
     */
    draw(ctx) {
        ctx.beginPath()

        ctx.fillStyle = '#0101FF'
        ctx.arc(this.x, this.y, this.radius, this.angle, this.angle * Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        ctx.closePath()
    }

    /**
     * Updates the position of the boid
     */
    update(ctx) {
        this.draw(ctx)

        // Boid contacts left border of canvas
        if((this.x + this.radius) > window.innerWidth) {
            this.dx = -this.dx
        }
        // Boid contacts right border of canvas
        if((this.x + this.radius) < 0) {
            this.dx = -this.dx
        }
        // Boid contacts bottom border of canvas
        if((this.y + this.radius) > window.innerHeight) {
            this.dy = -this.dy
        }
        // Boid contacts top border of canvas
        if((this.y + this.radius) < 0) {
            this.dy = -this.dy
        }


        this.x += this.dx
        this.y += this.dy
    }
}