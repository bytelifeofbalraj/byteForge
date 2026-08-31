// Hard Mode 🔥

// Check if a string is a palindrome recursively.

// "madam" → true
// "hello" → false

function palindrom(str){
    
    //base case
    if(str.length > 1){
            
       let firstLtr = str.at(0) //first letter
       let lastLtr = str.at(-1) //last letter

       if(firstLtr !== lastLtr){
            return 'string is not palindrom'
       }
      
       return palindrom(str.slice(1, -1))
       
    }   

    return 'string is palindrom'   

}

console.log(palindrom('madam'))