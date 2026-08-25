// Create function promiseRace(promises) that mimics Promise.race behavior. Return a promise that settles with the first promise to settle. Test with [Promise.resolve('fast'), new Promise(resolve => setTimeout(() => resolve('slow'), 100))]. Use async/await and log result.

const p1 = Promise.resolve("fast");
const p2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("slow");
  }, 100),
);

async function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const prom of promises) {
      prom
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}

const result = await promiseRace([p1, p2]);

console.log(result);
