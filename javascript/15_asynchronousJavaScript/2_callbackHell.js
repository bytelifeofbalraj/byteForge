// Create function `step1(callback)` that calls callback('Step 1'). Create `step2(callback)` that calls callback('Step 2'). Create `step3(callback)` that calls callback('Step 3'). Call them nested: step1 calls step2 in its callback, step2 calls step3 in its callback, step3 logs the data.

function step1(callback) {
  callback("Step 1");
}

function step2(callback) {
  callback(" -> Step 2");
}

function step3(callback) {
  callback(" -> Step 3");
}

step1((value1) => {
  let data1 = value1;
  step2((value2) => {
    let data2 = value2;
    step3((data3) => {
      console.log(`${data1} ${data2} ${data3}`);
    });
  });
});

/*
output ⤵️
Step 1  -> Step 2  -> Step 3

*/
