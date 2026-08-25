// create function promisify(fn) that converts a callback-based function to return a promise. Assume callbacks follow (error, result) pattern. Test with function callbackFunc(x, callback) { setTimeout(() => callback(null, x * 2), 10); }. Promisify it, call with 5, and log result.

const promisify = function (fn) {
  return function callbackFunc(x, callback) {
    new Promise((resolve, reject) => {});
  };
};
