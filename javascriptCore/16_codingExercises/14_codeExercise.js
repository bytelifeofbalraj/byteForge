function runAllProm(tasks) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    const promResults = [];

    //for loop
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
      const prom = tasks[taskIndex]();
      prom.then((prom) => {});
    }
  });
}

runAllProm([fethUser, fetchPosts, fetchTodos]);
