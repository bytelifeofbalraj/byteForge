// Create an array named `users` with objects: [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]. Use find() to get the user with id 2 and store it in `foundUser`. Log the foundUser.

let users = [{
    id: 1,
    name: 'Alice'
},
{
    id: 2,
    name: 'Bob'
},
{
    id:3,
    name:'Charlie'
}
]

let foundUser = users.find(obj =>  {
    return obj.id === 2
})

console.log(foundUser)