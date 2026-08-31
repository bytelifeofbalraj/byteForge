// Create a pure function `calculateTotal` that takes an array of prices and a tax rate, returning the total with tax. Don't modify the input array. Create prices array [10, 20, 30] and call calculateTotal with it and tax rate 0.1 (10%). Log the result.

const prices = [10, 20, 30]

function calculateTotal(arr, taxRate){
    let sumResult = 0 
    for(value of arr){
        sumResult += value
    }

    return (taxRate * sumResult) + sumResult
}

console.log(calculateTotal(prices, 0.1))