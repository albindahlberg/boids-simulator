import Swarm from './swarm.js'

// Setup canvas
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Setup boids
const number_of_boids = 10
const swarm = new Swarm(number_of_boids)
swarm.spawn(ctx)

// Main loop, animates indefinitely
let animate = function() {
  requestAnimationFrame(updateCanvas)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  swarm.update(ctx)
}

animate()