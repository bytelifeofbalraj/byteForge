// Create three Promises: p1 resolves with 1, p2 with 2, p3 with 3. Use Promise.all([p1, p2, p3]) and .then() to log the array of results.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});
