//Create a recursive function `countdown` that takes a number `n` and logs numbers from n down to 1. If n is 0 or less, do nothing (base case). Call countdown(3).

function countdown(n){
    if (n > 0){
        console.log(n)
        countdown(n-1)
    }
}

countdown(3)

