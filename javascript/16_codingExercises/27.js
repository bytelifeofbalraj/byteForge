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
  let delay = 500;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    console.log(attempt); //counting attempts by printing
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    try {
      if (attempt === 0) {
        result = fn(attempt);
        return result;
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
            reject(new Error("🪳"));
          }
        });
        return result;
      }
    } catch (error) {
      console.log(`Oops: ${error.message}`);
    }
    if (attempt <= maxRetries) {
      const randomness = Math.floor(Math.random() * 100);
      delay = delay * 2 + randomness;
      if (delay <= 5000) {
        console.log(`wait for ${delay / 1000} seconds!⌛`);
        await sleep(delay);
      } else {
        console.log(`wait for 5 seconds!⌛`);
        await sleep(5000);
      }
    }
  }
  throw new Error("All retries failed, try again!");
}
