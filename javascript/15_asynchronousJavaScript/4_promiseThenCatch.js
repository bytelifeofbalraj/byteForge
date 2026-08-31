// Create a Promise that rejects with Error('Failed'). Use .catch() to handle the rejection and log the error.message.

const myPromise = new Promise((resolve, reject) => {
  throw new Error("Failed");
});

myPromise.catch((error) => {
  console.log(error.message);
});
