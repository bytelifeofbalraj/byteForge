// Create a function `checkAge(age)` that throws an Error with message 'Too young' if age is less than 18, otherwise returns 'Access granted'. Create a try-catch, call checkAge(15), and log the error.message in catch.

function checkAge(age) {
  if (age < 18) {
    throw new Error("Too young");
  }
  return "Access granted";
}

try {
  checkAge(15);
} catch (error) {
  console.log(error.message);
}
