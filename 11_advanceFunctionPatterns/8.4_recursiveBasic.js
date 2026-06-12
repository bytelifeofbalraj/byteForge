// first testing slice. 

let arr = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]

let sliced = arr.slice(0, 1)
let spliced = arr2.splice(0, 1)

// console.log(sliced)
// console.log(arr)
// console.log(spliced)
// console.log(arr2)


// recursion hurdle: factorial ⤵️

let factor = 5 // short for factorial. 

function factorial(number){
    let total = number
    if(number > 0){
        return total *= factorial(number-1)
    }   
    
    return 1
}

console.log(factorial(factor))