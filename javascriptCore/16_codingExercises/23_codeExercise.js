class newSignal {
  constructor() {
    this.listenrs = [];
  }

  addEventListenr(event, callback) {
    this.listenrs.push({ event: event, callback: callback });
  }

  removeEventListner(event, callback) {
    for (let index = 0; index <= this.listenrs.length - 1; index++) {
      if (
        this.listenrs[index].event === event &&
        this.listenrs[index].callback === callback
      ) {
        this.listenrs.splice(index, 1);
        break;
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

/* output:

Listener A
Listener B
Listener C

*/
