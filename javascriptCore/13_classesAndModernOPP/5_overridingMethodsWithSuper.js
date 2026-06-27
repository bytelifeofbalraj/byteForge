// Create class `Shape` with method `describe()` returning 'A shape'. Create class `Circle` extending Shape. Override describe() to return 'A circle shape'. Create a circle and log circle.describe().

class Shape {
    describe(){
        return 'A shape'
    }
}

class Circle extends Shape {
    describe(){
        return 'A circle shape'
    }
}

const circle = new Circle()

console.log(circle.describe())