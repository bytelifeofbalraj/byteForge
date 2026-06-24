// Create a function `applyTwice` that takes a function `fn` and a value `x`, then applies the function to the value twice (fn(fn(x))). Create a function `addOne` that adds 1 to a number. Use applyTwice with addOne and the value 5, then log the result.

const applyTwice = (callBackFun, x) => {
    return callBackFun(callBackFun(x))
}

function addOne(number){
    return number + 1
}
console.log(applyTwice(addOne, 5))