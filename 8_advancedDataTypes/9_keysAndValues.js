// Create a Map named `products` with entries: 'laptop' -> 999, 'mouse' -> 25, 'keyboard' -> 75. Use Array.from() with products.keys() to get all keys in an array `productNames`. Use Array.from() with products.values() to get all values in an array `prices`. Log both arrays.

let products = new Map([['laptop', 999], ['mouse', 25], ['keyboard', 75]])

let productNames = Array.from(products.keys())
let prices = Array.from(products.values)

console.log(productNames)
console.log(prices)