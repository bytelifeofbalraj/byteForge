// Create a Map named `userRoles` with entries: 'alice' -> 'admin', 'bob' -> 'user', 'charlie' -> 'moderator'. Get the size and store it in `userCount`. Add a new entry 'diana' -> 'user'. Get the size again and store in `newCount`. Log both values.

let userRoles = new Map([['alice', 'admin'], ['bob', 'user'], ['charlie', 'moderator']])

let userCount = userRoles.size

userRoles.set('diana', 'user')


let newCount = userRoles.size

console.log(userCount)
console.log(newCount)