// Create a function `createFormatter` that takes a `prefix` and `suffix`. Return a function that takes a `text` parameter and returns the text wrapped with the prefix and suffix. Create a formatter with prefix '[' and suffix ']', then log the result of calling it with 'Important'.

const createFormatter = (prefix, suffix) => {
    return  function(text){
        return `${prefix}${text}${suffix}`
    }
}

const formatter = createFormatter('[', ']')
console.log(formatter('Important'))

