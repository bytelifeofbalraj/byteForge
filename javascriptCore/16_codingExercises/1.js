// Write a Promise that immediately succeeds with the value: 25

// Then print:
// 25 using .then().

const promise = new Promise((resolve, reject) => {
  resolve(25);
});

promise.then((value) => {
  console.log(value);
});
