// 💻 Engineering Challenge #2

// Requirements

// Create a Promise.
// Wait 2 seconds.
// Reject it with:
// "Network Error"
// Handle it using .catch().
// Print:
// Network Error

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Network Error");
  }, 2000);
});

promise.catch((error) => {
  console.log(error);
});
