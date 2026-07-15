/*
🎯 Engineering Challenge : Requirements ⤵️

One async function.
Fetch one user.
Validate response.ok.
Throw an error if invalid.
Parse the JSON.
Print:
Name
Email
City
Handle all failures with try...catch.

*/

async function user() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (response.ok) {
      const data = await response.json();
      console.log(`Name: ${data.name}`);
      console.log(`Email: ${data.email}`);
      console.log(`City: ${data.address.city}`);
    } else {
      throw new Error("Error occured");
    }
  } catch (error) {
    console.log(error);
  }
}

user();
