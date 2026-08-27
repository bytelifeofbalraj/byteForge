/*

New challenge 🔥

Now make testFn() behave more like a real operation:

Attempt 1 → throws error
Attempt 2 → throws error
Attempt 3 → succeeds

Your retry() should catch the failure, retry, and eventually return the successful value.

And if all allowed attempts fail, it should throw the final error.

No backoff yet. No setTimeout yet. Just synchronous errors + retry.

This is where try/catch becomes part of your retry mechanism.

*/

function testfn() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    if (attempt < 3) {
      return 5 === 4;
    }
    return 5 === 5;
  }
}

function retry(fn, maxRetries) {
  try {
    let result;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      console.log(attempt);
      result = fn();
      if (result) {
        return result;
      }
    }
    throw new Error("All retries failed, try again!");
  } catch (error) {
    console.log(`The error occurt, ${error}`);
  }
}

console.log(retry(testfn, 3));
