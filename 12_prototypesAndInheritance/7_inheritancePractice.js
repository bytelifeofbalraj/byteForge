//Challange 01

// User
// ├─ username
// ├─ email
// ├─ login()

//         ↓

// Admin
// ├─ department
// ├─ deleteUser()

function User(username, email){
    this.username = username
    this.email = email
}

User.prototype.login = function login(){}

function Admin(username, email, department){
    User.call(this, username, email)
    this.department = department
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.constructor = Admin

Admin.prototype.deleteUser = function deleteUser(){}

