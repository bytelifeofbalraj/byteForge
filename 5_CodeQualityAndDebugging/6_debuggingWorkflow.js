// Create a function named `findMax` that takes two numbers and returns the larger one. Test it with the values 45 and 67. Add console logs to trace the execution: log 'Comparing:' with both numbers, then log 'Result:' with the final answer.

function findMax(num1, num2) {
    console.log(`Comparing: ${num1} and ${num2}`); // Log the numbers being compared

    const max = num1 > num2 ? num1 : num2; // Determine the larger number using a ternary operator

    console.log(`Result: ${max}`); // Log the result
    return max; // Return the larger number
}   

// Test the function with the values 45 and 67
const number1 = 45;
const number2 = 67;

findMax(number1, number2); // Output: Comparing: 45 and 67, Result: 67 

