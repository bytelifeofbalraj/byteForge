// Create an object `vehicle` with method `drive()` that returns 'Driving'. Use Object.create(vehicle) to create a `car` object. Add a property `wheels: 4` to car. Log car.wheels and car.drive() on separate lines.

let vehicle = {
    drive(){
        return 'Driving'
    },
}

let car = Object.create(vehicle)
car.wheels = 4

console.log(car.wheels)
console.log(car.drive())