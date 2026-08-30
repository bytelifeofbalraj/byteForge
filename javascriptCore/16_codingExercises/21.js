/*
Constraints:

It must return a Promise.
That Promise should fulfill after about 5 seconds.
The fulfilled value should be:
Done waiting!

Then write code that:

const message = await waitFiveSeconds();
console.log(message);
*/

async function wait(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done waiting");
    }, wait);
  });
}

const message = await wait(2000);
console.log(message);
