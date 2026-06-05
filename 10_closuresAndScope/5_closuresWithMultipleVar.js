// Create a function `createBankAccount` that takes an initial `balance`. Return an object with methods: `deposit(amount)` (adds to balance, returns new balance) and `getBalance()` (returns current balance). Create an account with balance 100, deposit 50, then log the balance.

function createBankAccount(balance){
    return {
        deposit: function(amount){
            return balance += amount
        },

        getBalance: function(){
            return balance
        }
    }
}

const account = createBankAccount(100)
console.log(account.deposit(50))
console.log(account.getBalance())