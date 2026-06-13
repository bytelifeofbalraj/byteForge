// Problem : Count Characters 

// "hello" = 5 (total length of string)

function charCounter(str){
    let lenStr = 0
    if(str.length > 0){   
    
        let currChar = charCounter(str.slice(1))
        lenStr++
        
    }

    return lenStr

}

console.log(charCounter('hello'))

//currently I am here. 