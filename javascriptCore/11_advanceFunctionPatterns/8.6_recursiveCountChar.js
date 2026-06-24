// Problem : Count Characters 

// "hello" = 5 (total length of string)

function charCounter(str){
    if(str === ''){
        return 0
    }
    
    return 1 + charCounter(str.slice(1))

}

console.log(charCounter('hello'))


