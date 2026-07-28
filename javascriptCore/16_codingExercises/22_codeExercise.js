const controller = new AbortController();
console.log(controller.signal.aborted);
controller.abort();
console.log(controller.signal.aborted);

/* 
output ⤵️

false
true

*/
