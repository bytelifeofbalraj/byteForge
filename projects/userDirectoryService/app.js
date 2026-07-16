/*
📋 Client Brief

A small startup is building an internal employee dashboard.

The frontend team needs a User Service that they can reuse throughout the application.

Your job is to build that service.

Functional Requirements
Function 1

Create a service function that:

accepts a userId
validates the input
fetches the user
validates the HTTP response
parses the JSON
returns only:

{
  id,
  name,
  email,
  city
}

Function 2

Create another function whose only responsibility is to display the user information.

Example output:

ID: 1
Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
*/

async function userService(id) {
  const userId = id.trim();

  const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (userId.length < 1) {
    throw new Error("User id must have one digit");
  }

  for (const currentDigit of userId.split("")) {
    if (!numArr.includes(currentDigit)) {
      throw new Error("User id can only be a digit");
    }
  }

  // fetching user
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error("Some Error Occurred");
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    email: data.email,
    city: data.address.city,
  };
}

async function displayUser() {
  try {
    const userInfo = await userService("1");

    console.log(userInfo);
  } catch (error) {
    console.log(error);
  }
}

displayUser();
