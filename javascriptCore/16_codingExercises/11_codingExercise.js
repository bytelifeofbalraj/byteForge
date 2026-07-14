/*
Write an async function called: getMessage

Requirements:

Use exactly one await.

You are not allowed to use fetch().
You are not allowed to use timers.

You are allowed to use Promise.resolve().

The function should eventually produce: "Welcome to byteForge"

Then: 
Call the function.
Print the returned value.

*/

async function getMessage() {
  const message = await Promise.resolve("Welcome to byteForge");
  return message;
}

const result = getMessage();

console.log(result);

//Output: Promise { <pending> }
