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

function validatePassword(password){
    let cleanedPassword = password.trim()


    if(cleanedPassword.length === 0){
        throw new ValidationError('Password is required', 'password')
    }

    if(cleanedPassword.length < 8){
        throw new ValidationError('Password must be at least 8 characters long.', 'password')
    }

    for(let currentChar of cleanedPassword){
        if(currentChar.toUpperCase() !== currentChar.toLowerCase()){
            if(currentChar === currentChar.toUpperCase()){
                break
            }
            continue
        }
        throw new ValidationError('atleast one uppercase is required', 'password')
    }
    
}


for(let currentChar of 'djgdaAfg32@'){
        if(currentChar.toUpperCase() !== currentChar.toLowerCase()){
            if(currentChar === currentChar.toUpperCase()){
                console.log('Upper Case is: ', currentChar)
                break
            }
            console.log(`outside of inner if: ${currentChar}`)
            continue
        }
        console.log(`outside of outer if`)
    }
