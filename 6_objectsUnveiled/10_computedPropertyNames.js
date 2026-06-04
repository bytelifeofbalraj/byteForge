// Create a variable `key` set to 'color'. Create an object named `item` with a computed property using [key] that equals 'blue', and a regular property `size` that equals 'large'. Log the item object which should have properties 'color' and 'size'.

const key = 'color';

const item = {
    [key] : 'blue',
    size: 'large',
}

console.log(item);