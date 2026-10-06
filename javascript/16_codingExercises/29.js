// Make the operation take longer than the timeout.

let pReject = new Promise((resolve, reject) => {
  let id = setTimeout(() => resolve("I win"), 2000);
});

function timeOutWrapper(promise, ms) {
  let id;

  let timerProm = new Promise((resolve, reject) => {
    id = setTimeout(() => reject(new Error("Time is over")), ms);
  });

  let promWin = Promise.race([promise, timerProm]).finally(() =>
    clearTimeout(id),
  );

  return promWin;
}

timeOutWrapper(pReject, 1000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
