// Create an object named `user` with properties: name = 'Alice', age = 25, city = 'NYC'. Use object destructuring to extract name into a variable `name`, and age into `age`. Log both variables.

let user = {
    name:'Alice',
    age: 25,
    city: 'NYC'
}

let {name, age} = user

console.log(name)
console.log(age)