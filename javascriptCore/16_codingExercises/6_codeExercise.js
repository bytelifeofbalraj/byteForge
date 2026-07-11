//fetch and response

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  const result = response.json();
  console.log(result);
});

// ouput: Promise { <pending> }
