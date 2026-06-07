// Challenge — Partial Application
//A company ships products worldwide.Create a function that calculates shipping cost.

//The original function should require:
    //shippingRate
    //weight

//The shipping cost is:
    //shippingRate * weight

// task:

// Create a generic shipping cost function.
// Create a partial application utility (you may reuse your own approach or redesign it).
// Create a new function for India's shipping rate:
    // shippingRate = 50

// Use the new function to calculate the shipping cost for a package weighing:
    // 10

function shippingCost(shippingRate, weight){
    return shippingRate * weight
}

function partial(fun, rate){
    return (weight)=> fun(rate, weight)
}

const indianShippingRate = partial(shippingCost, 50)


//console.log(indianShippingRate(10))



//I have create a partial function which works fine. Now the next problem is that it is hard code function which always takes two arguments. What I should do next is that it can receive unlimited arguments and operates accordingly. 


//Creating a partial application utility that can handle: 
//  1.  sum(a, b, c)

// Requirements:

// 1. Pre-fill only the first argument.
// 2. The returned function should still be callable naturally.
// 3. No hardcoded parameter names like:
//     1. secondArg
//     2. thirdArg
// 4.  Think about variable-length arguments.

const sumNumbers = (a, b, c) => a + b + c

const partialTwo = (fun, a) => {
    return (...nums) => {
        // suppose I am receiving 5, 10 (two params)
        return fun(a, ...nums)
    }
}

const sum = partialTwo(sumNumbers, 5)

console.log(sum(5, 10))

