// Create a class `BankAccount` with a private field `#balance` initialized to 0 in the constructor. Add a method `deposit(amount)` that adds to #balance. Add a method `getBalance()` that returns #balance. Create an account, deposit 100, and log getBalance().

class BankAccount {
    #balance = 0 

    set deposit(amount){
        this.#balance = amount
    }

    get getBalance(){
        return this.#balance
    }
}

const account = new BankAccount()

account.deposit = 100

console.log(account.getBalance)