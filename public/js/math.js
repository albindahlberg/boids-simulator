/**
     * Generates a random integer in an interval
     * @param {Number} min The minimum value of the generated number
     * @param {Number} max The maximum value of the generated number
     * @returns A random integer in an interval
     * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
export default function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
}
