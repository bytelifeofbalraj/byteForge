// countdown using recursion

// 5 -> 4 -> 3 -> 2 -> 1

// a function which takes a max number and will go down to the minimum positive number, which in this case is 1.

// so 1 is base case in this example,
// Recursive case is how to solve problem in little part, 
// now is 5, my problem is to find a way to make it 4

function countDown(number){
    if (number >= 1){
        console.log(number)
        countDown(number-1)
    }
}

// countDown(5)

// ⏭️ next problem ⤵️

// Sum all numbers from 1 to N

// Example:

// sumTo(5) -> should produce: 15

// because: 1 + 2 + 3 + 4 + 5

const sumTo = (number) => {
    let total = 0
    if(number < 1){
        return 0
    }
    total += sumTo(number - 1)

    return total
    
}

console.log(sumTo(5))