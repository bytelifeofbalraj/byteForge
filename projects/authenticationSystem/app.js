class ValidationError extends Error {
    constructor(message, field){
        super(message)
        this.field = field
        this.name = 'ValidationError'
    }
}

function validateUsername(username){
    let cleanedUsername = username.trim()
    if(cleanedUsername.length === 0){
        throw new ValidationError(
            'username is invalid',
            'username'
        )
    }
}

function validateEmail(email){
    let cleanedEmail = email.trim()
    let splitArrayAt = cleanedEmail.split('@')
    let splitArrayDot = splitArrayAt[1].split('.')

    if(cleanedEmail.length === 0){
        throw new ValidationError('email is required', 'email')
    }
    
    if(splitArrayAt.length < 2 || splitArrayAt.length > 2){
        throw new ValidationError('there should be one @', 'email')
    }

    if(splitArrayAt[0].length === 0){
        throw new ValidationError("Email must contain text before '@'.", 'email')
    }

    if(splitArrayAt[1].length === 0){
        throw new ValidationError("Email must contain text after '@'.", 'email')
    }

    if(splitArrayDot.includes('')){
        throw new ValidationError('There should not a space before or after a dot', "email")
    }

   
}

// validateEmail('abc@a.b.c.d..e.com')

let arr = ['a',' b', 'c', 'd', 'e', 'com']

console.log(arr[arr.length -1])

let arr2 = ['a',' b', 'c', 'd', 'e']

console.log(arr2[arr2.length -1])

