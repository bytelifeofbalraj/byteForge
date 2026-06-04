// Create an array named `expenses` with [100, 50, 75, 25]. Use reduce() to calculate the total sum of all expenses and store it in `total`. Log the total.

let expenses = [100, 50, 75, 25]

let total = expenses.reduce((accum, currVal) => {
    return accum += currVal
},  0)

console.log(total)

