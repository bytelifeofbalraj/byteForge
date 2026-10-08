function timeoutFetch(url, ms) {
  let controller = new AbortController();
  let timedOut = false;

  let id = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, ms);

  let responseProm = fetch(
    url,

    {
      signal: controller.signal,
    },
  ).catch((error) => {
    if (timedOut === true) {
      throw new Error("Time is over");
    }
    throw error;
  });

  return responseProm.finally(() => clearTimeout(id));
}
