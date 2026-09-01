// Create function retry(fn, maxAttempts, delay) that retries async function fn up to maxAttempts times. Wait delay ms between attempts, doubling each time (exponential backoff). Test with function that fails twice then succeeds. Log 'Success!' when it works.

async function testFn(attempt) {
  if (attempt >= 3) {
    return Promise.resolve("You got it!");
  }
  return Promise.reject(new Error("🪳"));
}

async function retry(fn, maxAttempts, delay) {
  let result;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    try {
      if (attempt === 1) {
        console.log(`Attempt: ${attempt}`);
        result = await fn(attempt);
        return result;
      } else {
        console.log(`Attempt: ${attempt}`);

        result = await fn(attempt);
        return result;
      }
    } catch (error) {
      console.log(`An error: ${error.message}.`);
    }
    if (attempt === 1) {
      sleep(delay);
    } else {
      let delay = delay * 2;
      sleep(delay);
    }
  }
}

const result = await retry(testFn, 3, 1000);
console.log(result);
