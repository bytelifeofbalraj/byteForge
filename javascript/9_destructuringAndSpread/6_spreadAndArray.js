// Create two arrays: `arr1` with [1, 2, 3] and `arr2` with [4, 5, 6]. Use the spread operator to combine them into a new array `combined`. Log the combined array.

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let combined = [...arr1, ...arr2]

console.log(combined)