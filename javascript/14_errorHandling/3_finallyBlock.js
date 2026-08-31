// Create a try-catch-finally block. In try, log 'Try block' and throw an error. In catch, log 'Catch block'. In finally, log 'Finally block'. All three should execute.

try {
  console.log("Try block");
  throw new Error();
} catch {
  console.log("Catch block");
} finally {
  console.log("Finally block");
}
