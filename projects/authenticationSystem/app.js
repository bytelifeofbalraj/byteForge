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

    //atleast one uppercase is required
    let upperCaseFound = false 
    for(let currentChar of cleanedPassword){
        if(currentChar.toUpperCase() !== currentChar.toLowerCase()){
            if(currentChar === currentChar.toUpperCase()){
                upperCaseFound = true
                break
            }
        }
    }   
    
    if(!upperCaseFound){
        throw new ValidationError('At least one uppercase letter is required', 'password')
    } 

     //atleast one lowercase is required
    let lowerCaseFound = false 
    for(let currentChar of cleanedPassword){
        if(currentChar.toUpperCase() !== currentChar.toLowerCase()){
            if(currentChar === currentChar.toLowerCase()){
                lowerCaseFound = true
                break
            }   
        }
    }   
    
    if(!lowerCaseFound){
        throw new ValidationError('At least one lowercase letter is required.', 'password')
    } 

    //one digit required
    let numArr = ['0','1','2','3','4','5','6','7','8','9']
    let digitFound = false
    for(let currentChar of cleanedPassword){
        if(numArr.includes(currentChar)){
            digitFound = true
            break
        }
    }

    if(!digitFound){
        throw new ValidationError('At least one digit is required', 'password')
    }

    //one symbol required
    let symbolArr = ['!', '@', '#', '$', '%', '&', '*', '-']
    let symbolFound = false

    for(let currentChar of cleanedPassword){
        if(symbolArr.includes(currentChar)){
            symbolFound = true
            break
        }
    }

    if(!symbolFound){
        throw new ValidationError('At least one symbol is required', 'password')
    }
}



