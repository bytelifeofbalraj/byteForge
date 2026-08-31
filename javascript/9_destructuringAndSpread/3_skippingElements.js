// Create an array named `numbers` with [10, 20, 30, 40, 50]. Use array destructuring to extract only the first element into `first` and the fourth element into `fourth` (skip the 2nd and 3rd). Log both variables.

let numbers = [10, 20, 30, 40, 50]

let [first, , , fourth] = numbers

console.log(first)
console.log(fourth)