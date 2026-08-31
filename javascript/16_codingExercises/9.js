/*
Exercise

Requirements:

Fetch:
https://jsonplaceholder.typicode.com/users/1
Convert the response body into a JavaScript object.
Print only the user's name.
*/

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json(); //this is the location, where we are converting response body which is serialized json text into JS object.
  })
  .then((user) => {
    console.log(user.name);
  });

//output: Leanne Graham
