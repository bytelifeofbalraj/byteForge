// Create a class `ValidationError` that extends Error. The constructor should take a message parameter and call super(message), then set this.name to 'ValidationError'. Throw a new ValidationError('Invalid input'), catch it, and log error.name.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid input");
} catch (error) {
  console.log(error.name);
}
