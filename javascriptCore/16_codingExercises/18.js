/*
🎯 Task

Create two async functions.

Function 1
Fetch the user.
Convert the response to JSON.
Return the user object.
Function 2
Call Function 1.
Print the user's name.
If anything fails anywhere, handle the error gracefully.
Rules
Use async/await.
Use try...catch.
Don't use .then() or .catch().
Don't duplicate the fetch logic.
 */

async function user() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await response.json();

  return data;
}

async function printUser() {
  try {
    const userData = await user();
    console.log(userData.id);
    console.log(userData.name);
  } catch (error) {
    console.log("Error: ", error);
  }
}

printUser();
