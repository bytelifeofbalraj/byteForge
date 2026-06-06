// Create an array `numbers` with [1, 2, 3, 4, 5, 6]. Use filter to keep only even numbers, then use map to square each number. Store the result in `result` and log it.

let numbers = [1, 2, 3, 4, 5, 6]

let result = numbers.filter(num => num % 2 === 0).map(num => num * num)

console.log(result)