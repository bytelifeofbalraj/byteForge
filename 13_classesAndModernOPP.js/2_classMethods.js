// Create a class `Calculator` with a constructor that sets `this.value = 0`. Add a method `add(n)` that increases value by n and returns this. Add a method `getValue()` that returns the current value. Create an instance, call add(5), then log getValue().

class Calculator{
    constructor(value){
        this.value = 0
    }

    add(n){
        this.value += n
    }

    getValue(){
        return this.value
    }
}

let calc = new Calculator(0)

calc.add(5)

console.log(calc.getValue())