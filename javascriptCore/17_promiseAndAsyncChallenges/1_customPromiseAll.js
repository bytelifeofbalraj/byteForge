// Create function promiseAll(promises) that mimics Promise.all behavior. It should return a promise that resolves with an array of results when all promises resolve, or rejects if any promise rejects. Test with array of resolved promises [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]. Use async/await and log result.

const p1 = Promise.resolve(1);

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const p3 = Promise.resolve(3);
const p4 = Promise.reject("rejected");

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    const total = promises.length;
    let resultArray = [];

    for (let index = 0; index < total; index++) {
      promises[index]
        .then((value) => {
          resultArray[index] = value;
          completed++;

          if (completed === total) {
            resolve(resultArray);
          }

          throw new Error("Promise rejected");
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}

let result = await promiseAll([p1, p2, p3, p4]);

console.log(result);
