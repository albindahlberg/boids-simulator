import Boid from './boid.js';

const canvas = document.querySelector("canvas");
console.log(canvas)
const ctx = canvas.getContext('2d')

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize)
