// Create a function `multiply` that takes two parameters `a` and `b` and returns their product. Create a function `partial` that takes a function and a first argument, returning a new function that only needs the second argument. Use partial to create `multiplyByFive` from multiply. Call it with 3 and log the result.

function multiply(a, b){
    return a * b
}

function partial(fun1, firstArg){
    return (secondArg)=>{
        return fun1(firstArg, secondArg)
    }
}

let multiplyByFive = partial(multiply, 5)

console.log(multiplyByFive(3))