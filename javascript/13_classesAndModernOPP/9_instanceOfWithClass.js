// Create class `Animal`. Create class `Dog` extending Animal. Create a dog instance. Check if dog is instanceof Dog and store in `isDog`. Check if dog is instanceof Animal and store in `isAnimal`. Log both results on separate lines.

class Animal {}

class Dog extends Animal {}

const dog = new Dog()

let isDog = dog instanceof Dog
let isAnimal = dog instanceof Animal

console.log(isDog)  
console.log(isAnimal)