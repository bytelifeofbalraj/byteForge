// Create an object `animal` with property `eats: true`. Create another object `rabbit` using object literal syntax. Set rabbit's prototype to animal using Object.setPrototypeOf(rabbit, animal). Log rabbit.eats.

const animal = {
    eats:true
}

const rabbit = {}

Object.setPrototypeOf(rabbit, animal)

console.log(animal.eats)