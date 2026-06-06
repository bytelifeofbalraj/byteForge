// Create a function `compose` that takes two functions `f` and `g`, and returns a new function that applies g first, then f (i.e., f(g(x))). Create `addTwo` (adds 2) and `multiplyByThree` (multiplies by 3). Use compose to create a function that multiplies by 3 then adds 2. Apply it to 4 and log the result.

const addTwo = (number) => number + 2
const multiplyByThree = (number) => number * 3

const compose = (f, g) => (number) => f(g(number))

const functionPipeline = compose(addTwo, multiplyByThree)

console.log(functionPipeline(4))