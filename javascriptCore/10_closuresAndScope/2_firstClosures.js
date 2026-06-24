// Create a function `createGreeter` that takes a `name` parameter. It should return an inner function that logs 'Hello, [name]!'. Store the returned function in a variable `greet` and call it.

const createGreeter = (name) => {
    const innerFunction = () => {
        console.log(`Hello, ${name}!`)
    }
    return innerFunction               
}

const greet = createGreeter('Alice')

greet()  