// Create an array `funcs` to store functions. Use a for loop with 'let i' from 0 to 2. In each iteration, push a function to funcs that returns the value of i. After the loop, call funcs[0](), funcs[1](), and funcs[2]() and log each result on separate lines.

// let funcs = []

// for(let i= 0; i<=2; i++){
//     funcs.push(() => i)
// }

// console.log((funcs[0]()))
// console.log(funcs[1]())
// console.log(funcs[2]())

//with IIFE

let funcs = []

for(var i= 0; i<=2; i++){
    funcs.push(((i) => {
        return () =>{
            return i
        } 
    })(i))
}

console.log(funcs)
console.log((funcs[0]()))
console.log(funcs[1]())
console.log(funcs[2]())


