// Create a class `Animal` with constructor taking `name` and a method `speak()` that returns 'Sound'. Create a class `Dog` that extends Animal. Create a dog with name 'Buddy' and log dog.speak().

class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        return 'Sound'
    }
}

class Dog extends Animal {
    constructor(name){
        super(name)
    }
}

const dog = new Dog('Buddy')

console.log(dog.speak())