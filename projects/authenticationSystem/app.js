class ValidationError extends Error {
    constructor(message, field){
        super(message)
        this.field = field
        this.name = 'ValidationError'
    }
}

// helper function
function findCharHelper(string, conditionFunc){
    for(let currentChar of string){
        const conditionCheck = conditionFunc(currentChar)
        if(conditionCheck){
            return true
        }
    }
    return false    
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

// validate password

function validatePassword(password, helperFunc){
    let cleanedPassword = password.trim()

    // if string is empty
    if(cleanedPassword.length === 0){
        throw new ValidationError('this is not validate password', 'passowrd')
    }

    //password string should be minimum 8
    if(cleanedPassword.length < 8){
        throw new ValidationError('maximum length for password is 8 alphanumeric', 'password')
    }

    //callbacks

    //uppercase
    function upperCase(character){
        if(character.toUpperCase() !== character.toLowerCase()){
            if(character.toUpperCase){
                return true
            }
            return false
        }
        
    }

   // one digit 
    function findDigit(character){
    let digitArr = ['0','1','2','3','4','5','6','7','8','9']
        if(digitArr.includes(character)){
            return true
    }
        return false
    }


    // calls
    
    //is uppercase ?
    const isUpperCase = helperFunc(cleanedPassword, upperCase)
    if(!isUpperCase) throw new ValidationError('at least one uppercase character is required', 'password')

    //is there a digit ?
    const isDigit = helperFunc(cleanedPassword, findDigit)

    if(!isDigit) throw new ValidationError('at least one digit required', 'passowrd')
    
}


