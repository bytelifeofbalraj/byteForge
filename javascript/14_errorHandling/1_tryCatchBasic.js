// Create a try-catch block. In the try block, log 'Before error'. Then call a non-existent function `nonExistent()`. In the catch block, log 'Error caught'.

try {
  console.log("Before error");
  nonExistent();
} catch {
  console.log("Error caught");
}
