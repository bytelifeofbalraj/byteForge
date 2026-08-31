// Create a try-catch block. In try, throw a new Error with message 'Something went wrong'. In catch, log the error.message property.

try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
}
