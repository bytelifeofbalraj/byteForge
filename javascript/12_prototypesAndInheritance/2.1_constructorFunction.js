//01
function Book(title, author){
    this.title =  title
    this.author = author
}

Book.prototype.getSummary = function() {}

//02
function User(userName, email){
    this.userName = userName
    this.email = email
}

User.prototype.login = function(){
    
}

//03 - Create a constructor function `Dog` that takes `name` parameter. Add a method `bark` to Dog.prototype that returns 'Woof!'. Create a Dog instance with name 'Buddy' and call its bark method. Log the result.

function Dog(name){
    this.name = name
}

Dog.prototype.bark = function(){
    return 'Woof!'
}

let dog = new Dog('Buddy')

console.log(dog.bark())