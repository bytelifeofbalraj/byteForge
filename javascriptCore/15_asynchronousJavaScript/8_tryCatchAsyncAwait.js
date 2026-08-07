// Create async function `fetchData()` that creates a Promise rejecting with Error('Network error'). Create async function `getData()` with try-catch. In try, await fetchData(). In catch, log error.message. Call getData().

async function fetchData() {
  return new Promise((resolve, reject) => {
    throw new Error("Network error");
  });
}

async function getData() {
  try {
    const result = await fetchData();
  } catch (error) {
    console.log(error.message);
  }
}

getData();
