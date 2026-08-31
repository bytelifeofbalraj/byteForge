// Create two functions: `double` that takes a number and returns it doubled, and `addTen` that takes a number and returns it plus 10. Call them in sequence: first double 5, then add 10 to that result. Log the final answer (which should be 20).

function double(num) {
    return num * 2;
} 

function addTen(num) {
    return num + 10;
}

const doubledValue = double(5);
const finalResult = addTen(doubledValue);

console.log(finalResult);

