// Create a function `createCounter` that returns an object with two methods: `increment()` (increases internal count by 1 and returns it) and `getCount()` (returns current count). Start count at 0. Create a counter, call increment twice, then log the result of getCount().

function createCounter(){
    let counter = 0

    return {
        increment : function() { return ++counter} ,
        getCount : function() { return counter}
    }
}

const counter = createCounter()

console.log(counter.increment())
console.log(counter.increment())

console.log(counter.getCount())