import Swarm from './swarm.js'

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let swarm = new Swarm(10)

swarm.spawn(ctx)

let updateCanvas = function() {
  requestAnimationFrame(updateCanvas)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  swarm.update(ctx)
}


updateCanvas()
