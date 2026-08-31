// Create function retry(fn, maxAttempts, delay) that retries async function fn up to maxAttempts times. Wait delay ms between attempts, doubling each time (exponential backoff). Test with function that fails twice then succeeds. Log 'Success!' when it works.

async function testFn(attempt) {
  if (attempt >= 3) {
    let value = await Promise.resolve("You got it!");
    return value;
  }
  Promise.reject(new Error("🪳"));
}

async function retry(fn, maxAttempts, delay) {
  let result;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      if (attempt === 1) {
        console.log(`Attempt: ${attempt}`);
        result = await fn(attempt);
        return result;
      } else {
        console.log(`Attempt: ${attempt}`);
        result = await new Promise(async (resolve, reject) => {
          try {
            let value = 0;
            value = await fn(attempt);
            if (value) {
              resolve(value);
            } else {
              reject(new Error("silent error"));
            }
          } catch (error) {
            reject(new Error("loud error"));
          }
        });
        return result;
      }
    } catch (error) {
      console.log(`An error: ${error.Message}.`);
    }
    setTimeout(() => {}, delay);
  }
  console.log("I am here");
}

const result = await retry(testFn, 3, 1000);
console.log(result);
