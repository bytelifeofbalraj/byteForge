/*
🎯 Task ⤵️

You're building code that other developers will reuse.

Create async helper functions so that another developer can easily write code like:

const user = await getUser();
const todos = await getTodos();

Then create a third async function that:

Uses those helper functions.
Prints:
User's name
Number of todos

Handle errors in only one place.

*/

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const user = await response.json();

  return user;
}

async function getTodos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1",
  );

  const todos = await response.json();

  return todos;
}

async function printUserData() {
  try {
    const [user, todos] = await Promise.all([getUser(), getTodos()]);
    console.log(user.name);
    console.log(todos.length);
  } catch (error) {
    console.log("Error: ", error);
  }
}

printUserData();
