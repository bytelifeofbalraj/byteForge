// Recursive Maximum
// [3, 8, 2, 10, 1] = 10 (as max number is : 10)

let numArr = [3, 8, 2, 10, 1] // 10

function recursiveMaximum(arr){
    let currNum = 0
    let savedNum = arr[0]

    //base code
    if(arr.length > 0){

        

        if(savedNum > currNum){
            currNum = savedNum
            recursiveMaximum(arr)
            savedNum = arr.shift()
        }
    }

    // console.log(currNum)
    return currNum
}

console.log(recursiveMaximum(numArr))

console.log()
