import Boid from './boid.js'
import Flock from './flock.js'


const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

paper.setup(canvas);

let number_of_boids = 10
let flock = new Flock(paper, number_of_boids)


paper.view.onFrame = function(event){
    flock.update()
}