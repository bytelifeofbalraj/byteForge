// Create a constructor `Animal` that takes `name`. Add method `speak()` to Animal.prototype that returns 'Sound'. Create constructor `Dog` that takes `name` and calls Animal.call(this, name). Set Dog.prototype to Object.create(Animal.prototype). Create a dog with name 'Rex' and log dog.speak().


function Animal(name){
    this.name = name
}

Animal.prototype.speak = function speak(){
    return 'Sound'
}

function Dog(name){
    Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype)

let dog = new Dog('Rex')

console.log(dog.speak())