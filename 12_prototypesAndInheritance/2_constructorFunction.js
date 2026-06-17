// Create a constructor function `User` that takes `name` parameter and sets `this.name = name`. Create a new User with name 'Alice' and store it in variable `user`. Log user.name.

function User(name){
    this.name = name
}

let user = new User('Alice')

console.log(user.name)