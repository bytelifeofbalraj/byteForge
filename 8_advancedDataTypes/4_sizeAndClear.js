// Create a Set named `items` with [10, 20, 30, 40]. Get the size and store it in `count`. Then use clear() to remove all items. Get the size again and store in `afterClear`. Log both values.

const items = new Set([10, 20, 30, 40])

let count = items.size

items.clear()

let afterClear = items.size


console.log(count)
console.log(afterClear)
