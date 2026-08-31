// Create a function `fetchData(callback)` that calls the callback after execution with argument 'Data loaded'. Create a function `handleData(data)` that logs the data. Call fetchData passing handleData as the callback.

function fetchData(callback) {
  callback("Data loaded");
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
