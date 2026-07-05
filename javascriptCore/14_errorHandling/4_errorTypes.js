// Create a try-catch block. In try, try to call a number as a function: `const num = 5; num();`. In catch, log the error.name property (it will be 'TypeError').

try {
  const num = 5;
  num();
} catch (error) {
  console.log(error.name);
}
