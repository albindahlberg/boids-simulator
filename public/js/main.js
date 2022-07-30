import Boid from './boid.js'

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let boid = new Boid(10)
boid.draw(ctx)

let updateBoid = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  requestAnimationFrame(updateBoid)
  boid.update(ctx)
}

updateBoid()