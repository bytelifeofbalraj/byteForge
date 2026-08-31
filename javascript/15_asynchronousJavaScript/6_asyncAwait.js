// Create an async function `getData()`. Inside, create a Promise that resolves with 'Async data'. Use await to get the value and log it. Call getData().

async function getData() {
  const value = await new Promise((resolve, reject) => {
    resolve("Async data");
  });

  console.log(value);
}

getData();
