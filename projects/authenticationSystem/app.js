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

