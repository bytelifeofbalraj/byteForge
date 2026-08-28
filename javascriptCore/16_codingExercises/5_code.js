// fetch and response

fetch("https://jsonplaceholder.typicode.com/todos/1").then((HTTPresponse) => {
  console.log(HTTPresponse);
});

// output: it returns an object:
/*
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Fri, 10 Jul 2026 17:01:18 GMT',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    'access-control-allow-credentials': 'true',
    'cache-control': 'max-age=43200',
    etag: 'W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"',
    expires: '-1',
    nel: '{"report_to":"heroku-nel","response_headers":["Via"],"max_age":3600,"success_fraction":0.01,"failure_fraction":0.1}',
    pragma: 'no-cache',
    'report-to': '{"group":"heroku-nel","endpoints":[{"url":"https://nel.heroku.com/reports?s=o3LnB4y9klD2bC%2B9j%2F4juYbUmCEOESrp8RutkrsBB%2BY%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1776956825"}],"max_age":3600}',
    'reporting-endpoints': 'heroku-nel="https://nel.heroku.com/reports?s=o3LnB4y9klD2bC%2B9j%2F4juYbUmCEOESrp8RutkrsBB%2BY%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1776956825"',
    server: 'cloudflare',
    vary: 'Origin, Accept-Encoding',
    via: '2.0 heroku-router',
    'x-content-type-options': 'nosniff',
    'x-powered-by': 'Express',
    'x-ratelimit-limit': '1000',
    'x-ratelimit-remaining': '999',
    'x-ratelimit-reset': '1776956878',
    age: '8',
    'cf-cache-status': 'HIT',
    'content-encoding': 'br',
    'cf-ray': 'a191212f5bf7880b-SIN',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://jsonplaceholder.typicode.com/todos/1'
}
*/
