// Create an array named `queue` with [2, 3, 4]. Use unshift() to add the number 1 to the beginning. Then use shift() to remove the first element and store it in `first`. Log both the modified queue and the first value.

let queue = [2,3,4]

queue.unshift(1)

let first = queue.shift()

console.log(queue)
console.log(first)