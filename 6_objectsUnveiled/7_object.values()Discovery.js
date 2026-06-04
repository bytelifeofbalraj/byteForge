// Create an object named `scores` with properties: `math` = 95, `science` = 88, and `history` = 92. Use Object.values() to get all values as an array, store it in a variable `values`, and log it.

const scores = {
    math: 95,
    science: 88,
    history: 92
};

const values = Object.values(scores);
console.log(values);