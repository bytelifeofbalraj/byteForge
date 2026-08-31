// Create an IIFE (Immediately Invoked Function Expression) that declares a private variable `secret` with value 'hidden', then immediately logs 'Secret is: [secret]'. The IIFE should execute automatically.

(function(){
    let secret = 'hidden'
    console.log(`Secret is: ${secret}`)    
})()