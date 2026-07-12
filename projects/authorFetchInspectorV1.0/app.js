// Project Goal

// The client wants a small utility that verifies whether communication with an API is working correctly.

// This tool is intended for developers during development.

// It is not a user-facing application.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) return response.json();

    throw new Error("Response is not valid");
  })
  .then((users) => {
    // console.log(users);
    console.log(`Total number of authors: ${users.length}`);
    console.log(`First author's name: ${users[0].name}`);
    console.log(`Last author's email: ${users[users.length - 1].email}`);
  })
  .catch((error) => {
    console.log(error.name);
  });
