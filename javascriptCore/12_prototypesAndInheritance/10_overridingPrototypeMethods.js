// Create constructor `Shape` with method `describe()` in its prototype that returns 'A shape'. Create constructor `Circle` that inherits from Shape. Override `describe()` in Circle.prototype to return 'A circle'. Create a circle and log circle.describe().

function Shape(){}

Shape.prototype.describe = function describe(){
    return 'A shape'
}

function Circle(){}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.describe = function describe(){
    return 'A circle'
}

let circle = new Circle()

console.log(circle.describe())