// Create class `Vehicle` with constructor taking `brand`. Create class `Car` extending Vehicle with constructor taking `brand` and `model`. Call super(brand) in Car constructor, then set this.model. Create a car with brand 'Toyota' and model 'Camry'. Log car.brand and car.model on separate lines.

class Vehicle {
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
}

class Car extends Vehicle {
    constructor(brand, model){
        super(brand)
        this.model = model
    }
}

const car = new Car('Toyota', 'Camery')

console.log(car.brand)
console.log(car.model)