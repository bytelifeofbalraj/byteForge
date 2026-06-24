// Create a function `createMultiplier` that takes a `factor` parameter and returns a function that multiplies its input by that factor. Create `double` using createMultiplier(2) and `triple` using createMultiplier(3). Log double(5) and triple(5).

function createMultiplier(factor){
    return function innerFunction(value){
        return value * factor
    }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5))
console.log(triple(5))