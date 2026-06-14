// Rebuild factorial() from memory.

// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialRebuilding(factorNumber){

    if(factorNumber > 0){
        factorNumber *= factorialRebuilding(factorNumber-1)
        return factorNumber
    }

    return 1
}

console.log(factorialRebuilding(5))