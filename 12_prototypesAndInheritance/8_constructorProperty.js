// Create a constructor `Person`. Replace Person.prototype with a new object {greet() { return 'Hi'; }}. Manually set Person.prototype.constructor = Person. Create a person instance and log person.constructor.name.

function Person(){}

function greet() {return 'Hi'}

Person.prototype = Object.create(greet)

Person.prototype.constructor = Person

let person = new Person()

console.log(Person.name)

