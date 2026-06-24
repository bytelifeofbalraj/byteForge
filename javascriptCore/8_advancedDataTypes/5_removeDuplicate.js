// Create an array named `duplicates` with [1, 2, 2, 3, 3, 3, 4]. Create a Set from it, then convert back to an array using spread operator [...set] and store in `unique`. Log the unique array.


let duplicates = [1, 2, 2, 3, 3, 3, 4]

let arraySet = new Set(duplicates)

let unique = [...arraySet]


console.log(unique)