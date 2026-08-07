// Create function `task1()` returning Promise.resolve('Task 1'). Create `task2()` returning Promise.resolve('Task 2'). Use Promise.all to run both in parallel, then log both results on separate lines.

function task1() {
  return Promise.resolve("Task 1");
}

function task2() {
  return Promise.resolve("Task 2");
}

Promise.all([task1(), task2()]).then((result) => {
  console.log(result[0]);
  console.log(result[1]);
});
