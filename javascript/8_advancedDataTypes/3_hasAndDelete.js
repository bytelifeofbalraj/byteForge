// Create a Set named `colors` with ['red', 'green', 'blue']. Use has() to check if 'green' exists and store the result in `hasGreen`. Use delete() to remove 'green', then check has('green') again and store in `stillHas`. Log both values.

const colors = new Set(['red', 'green', 'blue'])

let hasGreen = colors.has('green')

colors.delete('green')

let stillHas = colors.has('green')

console.log(hasGreen)
console.log(stillHas)