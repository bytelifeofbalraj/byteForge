// Create a function named `checkAge` that takes a parameter `age`. If age is 18 or greater, return 'Adult'. Otherwise, return 'Minor'. Call it with 16 and 21, logging both results.


function checkAge(age) {
   return age >= 18 ? 'Adult' : 'Minor';
}

const result1 = checkAge(16);
console.log(result1);

const result2 = checkAge(21);
console.log(result2);