// Create a Promise.

// After 3 seconds...

// resolve("Pizza Ready")

// Print:

// Pizza Ready

//code
const start = Date.now();

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(Date.now() - start);
    resolve("Pizza Ready");
  }, 3000);
});

promise.then((value) => {
  console.log(value);
});
