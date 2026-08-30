// Exercise

// Write code that:

// Fetches:
// https://jsonplaceholder.typicode.com/users/1
// Uses one .then()
// Logs only the Response object.
// Do not use response.json().

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
  console.log(response);
});

// output:

/*
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Sat, 11 Jul 2026 10:43:26 GMT',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    'access-control-allow-credentials': 'true',
    'cache-control': 'max-age=43200',
    etag: 'W/"1fd-+2Y3G3w049iSZtw5t1mzSnunngE"',
    expires: '-1',
    nel: '{"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}',
    pragma: 'no-cache',
    'report-to': '{"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=hn4%2F1maIQNkNBMPZN8UBxYeR5%2BWqAzTjqvkSuWg67xo%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1783543370"}],"max_age":3600}',
    'reporting-endpoints': 'heroku-nel="https://nel.heroku.com/reports?s=hn4%2F1maIQNkNBMPZN8UBxYeR5%2BWqAzTjqvkSuWg67xo%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1783543370"',
    server: 'cloudflare',
    vary: 'Origin, Accept-Encoding',
    via: '2.0 heroku-router',
    'x-content-type-options': 'nosniff',
    'x-powered-by': 'Express',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '999',
    'x-ratelimit-reset': '1783543383',
    age: '21610',
    'cf-cache-status': 'HIT',
    'content-encoding': 'br',
    'cf-ray': 'a197350919010a9d-SIN',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://jsonplaceholder.typicode.com/users/1'
}
*/
