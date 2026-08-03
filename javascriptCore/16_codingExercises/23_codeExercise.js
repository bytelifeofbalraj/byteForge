class newSignal {
  constructor() {
    this.listenrs = [];
  }

  addEventListenr(event, callback) {
    this.listenrs.push({ event: event, callback: callback });
  }

  removeEventListner(event, callback) {
    for (const listner of this.listenrs) {
      if (
        listner.event === "abort" &&
        callback.name === listner.callback.name
      ) {
        const index = this.listenrs.indexOf(listner);
        this.listenrs.splice(index, 1);
      }
    }
  }

  dispatch(event) {
    for (const listener of this.listenrs) {
      if (listener.event === event) {
        listener.callback();
      }
    }
  }
}

const signal = new newSignal();

signal.addEventListenr("abort", function callbackA() {
  console.log("Listenr A");
});

signal.addEventListenr("abort", function callbackB() {
  console.log("Listenr B");
});

signal.addEventListenr("abort", function callbackC() {
  console.log("Listenr C");
});

// signal.dispatch("abort");

console.log(signal);
signal.removeEventListner("abort", callbackB);
console.log(signal);

/* output:

Listener A
Listener B
Listener C

*/
