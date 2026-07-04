class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
    this.name = "ValidationError";
  }
}

function validateUsername(username) {
  let cleanedUsername = username.trim();
  if (cleanedUsername.length === 0) {
    throw new ValidationError("username is invalid", "username");
  }
}

function validateEmail(email) {
  let cleanedEmail = email.trim();
  let splitArrayAt = cleanedEmail.split("@");
  let splitArrayDot = splitArrayAt[1].split(".");

  if (cleanedEmail.length === 0) {
    throw new ValidationError("email is required", "email");
  }

  if (splitArrayAt.length < 2 || splitArrayAt.length > 2) {
    throw new ValidationError("there should be one @", "email");
  }

  if (splitArrayAt[0].length === 0) {
    throw new ValidationError("Email must contain text before '@'.", "email");
  }

  if (splitArrayAt[1].length === 0) {
    throw new ValidationError("Email must contain text after '@'.", "email");
  }

  if (splitArrayDot.includes("")) {
    throw new ValidationError(
      "There should not a space before or after a dot",
      "email",
    );
  }
}

// validate password
function validatePassword(password) {
  // helper function
  function checkCharHelper(string, conditionFunc) {
    for (const currentChar of string) {
      const conditionCheck = conditionFunc(currentChar);
      if (conditionCheck) {
        return true;
      }
    }
    return false;
  }

  // if string is empty
  if (password.length === 0) {
    throw new ValidationError("this is not valid password", "passowrd");
  }

  //password length should be minimum 8
  if (password.length < 8) {
    throw new ValidationError(
      "maximum length for password is 8 alphanumeric",
      "password",
    );
  }

  //callbacks

  //uppercase
  function hasUpperCase(character) {
    if (character.toUpperCase() !== character.toLowerCase()) {
      if (character === character.toUpperCase()) {
        return true;
      }
      return false;
    }
    return false;
  }

  //lowercase
  function hasLowerCase(character) {
    if (character.toLowerCase() !== character.toUpperCase()) {
      if (character === character.toLowerCase()) {
        return true;
      }
      return false;
    }
    return false;
  }

  //one digit
  function findDigit(character) {
    const digitArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (digitArr.includes(character)) {
      return true;
    }
    return false;
  }

  //one symbol
  function findSpecialCharacter(character) {
    const specialCharArr = ["!", "@", "#", "$", "%", "&", "*", "-"];
    if (specialCharArr.includes(character)) {
      return true;
    }
    return false;
  }

  //************************************** */
  //calls

  //is uppercase?
  const isUpperCase = checkCharHelper(password, hasUpperCase);
  if (!isUpperCase)
    throw new ValidationError(
      "at least one uppercase character is required",
      "password",
    );

  //is lowercase?
  const isLowerCase = checkCharHelper(password, hasLowerCase);
  if (!isLowerCase)
    throw new ValidationError(
      "at least one lowercase character is required",
      "password",
    );

  //is there a digit?
  const isDigit = checkCharHelper(password, findDigit);

  if (!isDigit)
    throw new ValidationError("at least one digit required", "password");

  //is there a special character from the list?
  const isSpecialCharacter = checkCharHelper(password, findSpecialCharacter);

  if (!isSpecialCharacter)
    throw new ValidationError(
      "at least one special character required",
      "password",
    );

  //is there any space?
  const hasSpace = checkCharHelper(password, findSpace);
  if (hasSpace) throw new ValidationError("space is not required", "password");
}
