// Recursive Maximum
// [3, 8, 2, 10, 1] = 10 (as max number is : 10)

let numArr = [3, 8, 2, 10, 1] // 10

function recursiveMaximum(arr){
    let maxNum = arr[0]
    let currNum = 0
    
    //base code
    if(arr.length > 0){      
        arr.shift() 
        currNum = recursiveMaximum(arr)  

        if(currNum > maxNum){
            maxNum = currNum
        }
    }

    return maxNum
}

recursiveMaximum(numArr)
