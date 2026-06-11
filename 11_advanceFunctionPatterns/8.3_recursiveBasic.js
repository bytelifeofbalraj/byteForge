// Sum all numbers from 1 to N

// Example:

// sumTo(5) -> should produce: 15

// because: 1 + 2 + 3 + 4 + 6

const sumTo = (number) => {
    let total = number
    if(number < 1){
        return 0
    }
    let sum = sumTo(number - 1)

    total += sum

    return total
    
}

//console.log(sumTo(5))