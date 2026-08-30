/*

Challenge 1 — Basic Retry

Create a function conceptually like:

retry(fn, maxRetries)

The function should:

call fn()
if it succeeds → return the result
if it fails → retry
stop after maxRetries
if all retries fail → throw/return the final error

*/

function testFn() {
  const a = 5;
  const b = 10;

  return a === b;
}

function retry(fn, maxRetries) {
  let result = 0;
  for (let count = 0; count <= maxRetries; count++) {
    console.log(count);
    result = fn();
    if (result) {
      console.log(result);
      return;
    }
  }
  throw new Error("all requests failed");
}

retry(testFn, 3);
