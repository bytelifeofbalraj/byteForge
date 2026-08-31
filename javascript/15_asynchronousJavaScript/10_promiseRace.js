// Create two Promises: p1 resolves with 'First', p2 resolves with 'Second'. Use Promise.race([p1, p2]) and .then() to log the result (should be 'First').

const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");

Promise.race([p1, p2]).then((result) => {
  console.log(result);
});
