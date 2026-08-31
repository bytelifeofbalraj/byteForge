// Create async function `getValue()` that returns 42 (not a Promise, just the number). Call getValue() and use .then() to log the result.

async function getValue() {
  return 42;
}

getValue().then((num) => console.log(num));
