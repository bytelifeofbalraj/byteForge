// Create a Promise assigned to variable `myPromise` using new Promise(). The executor function takes resolve and reject parameters. Call resolve('Success'). Then use .then() to log the resolved value.

const myPromise = new Promise((resolve, reject) => {
  resolve("Sucess");
});

myPromise.then((result) => {
  console.log(result);
});
