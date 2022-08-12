import Boid from './boid.js'
import Flock from './flock.js'


const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

paper.setup(canvas);

let numberOfBoids = 10
let flock = new Flock(paper, numberOfBoids)


paper.view.onFrame = function(event){
    flock.update()
}