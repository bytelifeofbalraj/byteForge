/*

Next challenge

Make testFn() sometimes fail and then succeed.

For example, make it fail on the first 2 calls and succeed on the 3rd.

Don't use setTimeout yet. Keep it synchronous.

Your retry function should produce something like:

attempt 1 → failure
attempt 2 → failure
attempt 3 → success

and return the successful result.

*/

function testfn(x, y) {
  return x == y;
}

function retry(fn, maxRetries) {
  let result = 0;

  for (let count = 0; count <= maxRetries; count++) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    result = fn(x, y);
    console.log(count);
    if (result) {
      return result;
    }
  }

  throw new Error("all requests failed");
}

console.log(retry(testfn, 3));
