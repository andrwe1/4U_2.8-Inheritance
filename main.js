/**
 * ICS4U - Mr. Brash
 *  
 * 2.8 - Inheritance & Super! 🦸🏻
 * 
 * Read the README.md file (right-click it and select Open Preview)
 * 
 * Author: Andrew Leech
 */

'use strict';

// The lib.round() function is available
const lib = require("./library.js");


class BankAccount {
    nickname = "My Account";
    #type = "Account";
    #balance = 0.0;

    constructor (type, nickname, balance) {
        this.#type = type; 
        this.nickname = nickname; 
        this.#balance = balance;
    }

    debit(amt) {
        if (amt > 0 && amt < this.#balance) {
            lib.round(this.#balance -= amt, 2); 
            return "Transaction Successful";
        }
        return "Transaction Unsuccessful";
    }
    credit(amt) {
        if (amt > 0) {
            lib.round(this.#balance += amt, 2); 
            return "Transaction Successful";
        }
        return "Transaction Unsuccessful"; 
    }
}

class SavingsAccount extends BankAccount {

    #interest_rate = 0.03; 

    constructor(nickname = "Basic Savings") {
        super ("Savings Account", nickname, 0); 
    }

    get interest() {return this.#interest_rate} 

    set change_interest (interest) {
        if (interest > 0 && interest < 1) {
            this.#interest_rate = interest;
        }
    }

    apply_interest() {
        super.balance += super.balance * this.#interest_rate;
    }
}

class CheckingAccount extends BankAccount {

    constructor (nickname = "Basic Savings") {
        
    }
}

let brokeboycard = new SavingsAccount();

brokeboycard.change_interest(0.05);
console.log(brokeboycard.interest())