// Reverse a string recursively

//going down = ⤵️
// [step 1] = h,[step 2] = e, [step 3] = l,[step 4] = l, [step 5]= o 

//winding up = ⤵️
// '' = [last step], h = [step 5], e = [step 4], l = [step 3], l = [step 2], o = [step 1]

// "hello" = "olleh"

function reverseString(string){
    let reverseStr = string[0]


    //base case
    if(string === ''){
        return ''
    }

    let str = string[0] = reverseString(string.slice(1))
    reverseStr = str + reverseStr

    return reverseStr
}

console.log(reverseString('hello')) // 'olleh'

let strLen = reverseString('hello')

console.log(strLen.length)