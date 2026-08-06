// Create a Promise that resolves with 5. Chain .then() to multiply by 2, then another .then() to add 3, then log the final result (which should be 13).

const myPromise = new Promise((resolve, reject) => {
  resolve(5);
})
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    console.log(num + 3);
  });
