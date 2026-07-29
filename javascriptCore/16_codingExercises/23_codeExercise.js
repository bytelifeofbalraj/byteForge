class newSignal {
  constructor() {
    this.listeners = [];
  }

  addEventListener(event, listnerCallback) {
    this.listeners.push({ event: event, callback: listnerCallback });
  }

  dispatch(event) {
    for (const listener of this.listeners) {
      if (listener.event === event) {
        listener.callback();
      }
    }
  }
}

const signal = new newSignal();

signal.addEventListener("abort", () => {
  console.log("Listener A");
});

signal.addEventListener("abort", () => {
  console.log("Listener B");
});

signal.addEventListener("abort", () => {
  console.log("Listener C");
});

signal.dispatch("abort");

/* output:

Listener A
Listener B
Listener C

*/
