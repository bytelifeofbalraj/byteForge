// Create an outer function `outer` that declares a variable `message` with value 'Hello'. Inside `outer`, create an inner function `inner` that logs the `message` variable. Call `inner()` from within `outer`, then call `outer()`.

function outer(){
    message = 'Hello'

    // inner function
    function inner(){
        console.log(message)
    }

    inner()
}

outer()