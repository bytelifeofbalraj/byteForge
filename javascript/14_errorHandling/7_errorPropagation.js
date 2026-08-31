// Create function `divide(a, b)` that throws Error('Cannot divide by zero') if b is 0, otherwise returns a / b. Create function `calculate()` that returns divide(10, 0) without try-catch. Call calculate() in a try-catch and log error.message.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function calculate() {
  return divide(10, 0);
}

try {
  calculate();
} catch (error) {
  console.log(error.message);
}
