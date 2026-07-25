/*
API
https://jsonplaceholder.typicode.com/users/1

Task

Create three async functions:

One function fetches and returns the user.
One function calls the first function and returns only the user's name.
One function calls the second function and prints the name.

Handle errors in only one place.

That's the complete problem statement. No hints.
*/

//learning error prapogation, how error traverse
async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await response.json();

  return data;
}

async function userName() {
  const receiveUserName = await fetchUser();
  return receiveUserName.name;
}

async function printUserName() {
  try {
    const userName = await userName();

    console.log(userName);
  } catch (error) {
    console.log("Error: ", error);
  }
}

printUserName();
