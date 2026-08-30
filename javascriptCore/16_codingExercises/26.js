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

function testFn(attempt) {
  if (attempt >= 5) {
    return "You got it!";
  }
  throw new Error("🪳");
}

function retry(fn, maxRetries) {
  let result;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    console.log(attempt);
    try {
      result = fn(attempt);
      if (result) {
        return result;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  throw new Error("All retries failed, try again!");
}
console.log(retry(testFn, 3));
