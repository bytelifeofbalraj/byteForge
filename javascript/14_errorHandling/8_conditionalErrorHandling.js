// Create function `processData(data)` that throws TypeError('Invalid type') if typeof data !== 'string', or throws RangeError('Too short') if data.length < 5, otherwise returns data.toUpperCase(). Call processData(123) in try-catch and log 'Type error caught'.

function processData(data) {
  if (typeof data !== "string") {
    throw new TypeError("Invalid type");
  }

  if (data.length < 5) {
    throw new RangeError("Too short");
  }

  return data.toUpperCase();
}

try {
  processData(123);
} catch (error) {
  console.log("Type error caught");
}
