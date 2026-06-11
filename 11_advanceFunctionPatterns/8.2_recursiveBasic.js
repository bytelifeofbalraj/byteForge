// I am watching a video from the Hitesh Chaudhary's youtube Channel 'Chai Code' about Recursion, which is pretty long. He is practicing recursion with Array so I thought first I should try it myself before watching his video so I am solving the same array problem with recursion and then I will watch his video. 

// Create a recursive function `sumArray` that takes an array of numbers and returns their sum. Base case: empty array returns 0. Recursive case: return first element plus sum of remaining elements. Call it with [1, 2, 3, 4] and log the result.

let arr = [1, 2, 3, 4] // output: 10

const sumArray = (arr) => {
    if(arr.length === 0){
        return 0
    }
    
    return arr.shift() + sumArray(arr)
}

// console.log(sumArray(arr))


let arr2 = [1, 2, 3, 4] 

sumArray(arr2)

console.log(arr2)