// Create an array named `scores` with [95, 88, 92, 78, 85]. Use array destructuring to extract the first element into `highest`, and collect the remaining elements into an array `rest`. Log both variables.

let scores = [95, 88, 92, 78, 85]

let [highest, ...rest] = scores

console.log(highest)
console.log(rest)