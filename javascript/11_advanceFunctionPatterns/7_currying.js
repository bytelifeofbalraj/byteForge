// Create a curried function `add` that takes one argument and returns a function that takes another argument and returns their sum. Call add(3)(4) and log the result.

const add = (a) => {
    return (b) => {
        return a + b
    }
}

console.log(add(3)(4))
