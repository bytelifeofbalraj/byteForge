//main operation reject after 500 ms

let mainProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Rejecting after 500 ms"));
  }, 500);
});

function timeoutWrapper(promise, ms) {
  let id;

  let prom2 = new Promise((resolve, reject) => {
    id = setTimeout(() => {
      reject(new Error("Time is over"));
    }, ms);
  });

  let finalProm = Promise.race([promise, prom2]).finally(() =>
    clearTimeout(id),
  );

  return finalProm;
}

timeoutWrapper(mainProm, 1000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err.message));
