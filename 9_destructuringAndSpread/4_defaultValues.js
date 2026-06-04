// Create an object named `config` with only a property: timeout = 5000. Use object destructuring to extract timeout and a non-existent property retries with a default value of 3. Log both variables.

let config = {
    timeout: 5000,
}

let {timeout, retries = 3} = config

console.log(timeout)
console.log(retries)