// Create function `fetchUser()` that returns a Promise resolving with 'John'. Create async function `getUser()` that awaits fetchUser() and logs the result. Call getUser().

function fetchUser() {
  return new Promise((resolve) => {
    resolve("John");
  });
}

async function getUser() {
  const result = await fetchUser();
  console.log(result);
}

getUser();
