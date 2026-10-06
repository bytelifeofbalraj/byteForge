//Operation finishes BEFORE timeout → success

const promWins = Promise.resolve("I win");

function timeoutWrapper(promise, ms) {
  let id;
  const promLoose = new Promise((resolve, reject) => {
    id = setTimeout(() => reject("I loose"), ms);
  });

  let PromWinner = Promise.race([promise, promLoose]).finally(() => {
    clearTimeout(id);
  });

  return PromWinner;
}

timeoutWrapper(promWins, 1000)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
