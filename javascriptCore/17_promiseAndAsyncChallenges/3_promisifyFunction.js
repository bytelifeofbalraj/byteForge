// create function promisify(fn) that converts a callback-based function to return a promise. Assume callbacks follow (error, result) pattern. Test with function callbackFunc(x, callback) { setTimeout(() => callback(null, x * 2), 10); }. Promisify it, call with 5, and log result.

function callbackFunc(x, callback) {
  setTimeout(() => callback(null, x * 2), 10);
}

function promisify(fn) {
  return function wrapper(x) {
    return new Promise((resolve, reject) => {
      fn(x, (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    });
  };
}

const wrapper = promisify(callbackFunc);

const p = wrapper(5);

p.then((result) => console.log(result)).catch((error) => console.log(error));
