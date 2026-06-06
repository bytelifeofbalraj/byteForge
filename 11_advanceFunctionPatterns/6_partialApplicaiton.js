// Create a function `multiply` that takes two parameters `a` and `b` and returns their product. Create a function `partial` that takes a function and a first argument, returning a new function that only needs the second argument. Use partial to create `multiplyByFive` from multiply. Call it with 3 and log the result.

const multiply = (a, b) => a * b
const partial = (fun, firstArg) => {
    return (secondArg) => {
        return firstArg * secondArg
    }
}

// I am stuck here -> resolve it in the morning.