// Create function promiseAll(promises) that mimics Promise.all behavior. It should return a promise that resolves with an array of results when all promises resolve, or rejects if any promise rejects. Test with array of resolved promises [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]. Use async/await and log result.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("I am not fulfilled");
//   }, 3000);
// });

let promiseArr = [p1, p2, p3];

async function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resultArray = [];
    for (let p = 0; p < promises.length; p++) {
      promises[p].then((result) => {
        resultArray[p] = result;
      });
    }

    console.log(resolveProms);
  });
}

promiseAll(promiseArr);
