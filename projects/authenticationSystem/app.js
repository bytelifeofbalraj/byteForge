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
    let splitArray = cleanedEmail.split('@')

    if(cleanedEmail.length === 0){
        throw new ValidationError('email is required', 'email')
    }
    
    if(splitArray.length < 2 || splitArray.length > 2){
        throw new ValidationError('there should be one @', 'email')
    }

    if(splitArray[0].length === 0){
        throw new ValidationError("Email must contain text before '@'.", 'email')
    }

    if(splitArray[1].length === 0){
        throw new ValidationError("Email must contain text after '@'.", 'email')
    }
}

