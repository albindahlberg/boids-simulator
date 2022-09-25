
/**
     * Generates a random integer in an interval
     * @param {Number} min The minimum value of the generated number
     * @param {Number} max The maximum value of the generated number
     * @returns A random integer in an interval
     * @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
export var randomInt = function(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
}

/**
 * Generates a random number from 0 to a maximum value
 * @param {Number} max The maximum value of the number
 * @returns A random number between 0 and the input
 */
export var randomNumber = function(max) {
    const x = Math.random() // [0, 1]
    return x*max
}

