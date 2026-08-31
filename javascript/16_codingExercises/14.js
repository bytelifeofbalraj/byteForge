function runAllProm(tasks) {
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      return resolve([]);
    }

    let counter = 0;
    const promResults = [];

    //for loop
    for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
      const prom = tasks[taskIndex]();
      prom.then((result) => {
        promResults[taskIndex] = result;
        counter++;
        if (counter === tasks.length) {
          resolve(promResults);
        }
      });
      prom.catch((error) => {
        reject(error);
      });
    }
  });
}

runAllProm([fethUser, fetchPosts, fetchTodos]);
