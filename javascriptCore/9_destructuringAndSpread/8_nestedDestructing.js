// Create an object `person` with: name = 'Alice', address = {city: 'NYC', zip: '10001'}. Use nested destructuring to extract name and the nested city property. Log both variables.

let person = {
    name: 'Alice',
    address: {
        city: 'NYC',
        zip: '10001'
    }
}

let {name, address: {city}} = person

console.log(name)
console.log(city)