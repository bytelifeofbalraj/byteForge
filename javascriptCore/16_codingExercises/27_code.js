/*
Next task

Now think about this question:

What do we need to change about retry() so that it can actually wait for a Promise before moving to the next attempt?

You already learned Promises and async/await, so don't search for a new concept yet.

Try to connect the things you already know:

setTimeout
   +
Promise
   +
async/await

Figure out how those three could work together to create:

Attempt 1
   ↓
wait 1 second
   ↓
Attempt 2
   ↓
wait 1 second
   ↓
Attempt 3

Build it yourself first. 🧠
*/

function testFn(attempt) {
  if (attempt >= 3) {
    return "You got it!";
  }
  throw new Error("🪳");
}

async function retry(fn, maxRetries) {
  let result;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    console.log(attempt); //counting attempts by printing
    try {
      if (attempt === 0) {
        result = fn(attempt);
        if (result) {
          return result;
        }
        throw new Error(`Attempt ${attempt} failed.`);
      } else {
        result = await new Promise((resolve, reject) => {
          try {
            let value = fn(attempt);
            if (value) {
              resolve(value);
            } else {
              reject(value);
            }
          } catch (error) {
            reject(error.message);
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  throw new Error("All retries failed, try again!");
}

let result = await retry(testFn, 3);
console.log(result);
