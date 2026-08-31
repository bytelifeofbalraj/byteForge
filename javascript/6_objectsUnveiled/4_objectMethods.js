// Create an object named `calculator` with two properties: `value` set to 0, and a method `add` that takes a parameter `n` and adds it to the `value` property (using this.value). Call the add method with 5, then log the calculator's value.

const calculator = {
  value: 0,
  add: function(n) {
    this.value += n;
  }
};

calculator.add(5);
console.log(calculator.value); // Output: 5

