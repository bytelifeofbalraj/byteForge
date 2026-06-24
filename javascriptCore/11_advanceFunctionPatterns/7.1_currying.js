//Create a curried version of:
//  sum(a, b, c)

//Requirements:
//  sum(1)(2)(3)

//should eventually produce: 6

const sum = (a) => {
    return (b) => {
        return (c) =>{
            return a + b + c
        }
    }
}

// console.log(sum(1)(2)(3))


// what if requirement is: sum(1)(2)(3)(4)(5) = 15

// What I mean is that how will create a lot of currying functions ? 


//thinking...
// what should I do?
// should I manually create each inner function ? : this should be NO.

const sum = (a) => {

}

// so I think, I need to study about recursion before soloving above problem after my reasearch using ai. 
