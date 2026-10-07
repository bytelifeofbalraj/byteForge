function timeoutFetch(url, ms) {
  let controller = new AbortController();
  let responseProm = fetch(
    url,

    {
      signal: controller.signal,
    },
  );

  let id = setTimeout(() => {
    controller.abort();
  }, ms);

  return responseProm.finally(() => clearTimeout(id));
}
