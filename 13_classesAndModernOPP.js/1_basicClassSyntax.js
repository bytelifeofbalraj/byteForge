// Create a class `Person` with a constructor that takes a `name` parameter and assigns it to `this.name`. Create an instance with name 'Alice' and log person.name.

class Person{
    constructor(name){
        this.name = name
    }
}

let person = new Person('Alice')

console.log(person.name)