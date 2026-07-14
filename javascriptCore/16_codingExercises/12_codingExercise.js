/*
Write a function that satisfies these requirements:

Name it getNumber.
Mark it async.
Use exactly one await.
Use Promise.resolve(100).
Return the number.
Then, without using .then(), print the actual number 100 (not the Promise).

Don't worry if you think, "But we haven't learned how to do that."

*/

async function getNumber() {
  const number = await Promise.resolve(100);
  return number;
}

const result = getNumber();

console.log(result);
