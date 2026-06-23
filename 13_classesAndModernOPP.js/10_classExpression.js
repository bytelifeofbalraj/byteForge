// Create a class expression assigned to variable `User` with constructor taking `name` parameter. Add method `greet()` that returns 'Hello, [name]'. Create a user with name 'Bob' and log user.greet().

const User = class {
    constructor(name){
        this.name = name
    }

    get greet(){
        return `Hello, ${this.name}`
    }
}

const user = new User('Bob')

console.log(user.greet)