// Create an array named `ages` with [12, 18, 25, 15, 30]. Use filter() to create a new array `adults` containing only ages 18 or above. Log the adults array.

let ages = [12, 18, 25, 15, 30]

let adults = ages.filter(age => age >= 18)

console.log(adults)