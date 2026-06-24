// Create a function named `greetWithDefault` that takes a parameter `name` with a default value of 'Guest'. The function should return the string 'Welcome, [name]'. Call it twice - once without arguments and once with 'Bob', logging both results.

function greetWithDefault(name = 'Guest') {
    return `Welcome, ${name}`;
}

const greeting1 = greetWithDefault();
console.log(greeting1);

const greeting2 = greetWithDefault('Bob');
console.log(greeting2);

