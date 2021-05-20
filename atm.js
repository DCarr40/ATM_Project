"use strict"

const prompt = require('prompt-sync')();
const account = require('./account')();

//set balance to 0.00
let balance = 0;

let accountPinAttempt = parseInt(prompt('Please Input your PIN.'));
let accessGranted = false;
let amount = parseInt(prompt("How much money would you like to withdraw?"));


// Get Balance
function getBalance(){ 
    return balance;
};

//withdraw
function withdraw(){
    balance -= amount;
    return totalBalance;
};

//Create a deposit
function deposit(amount){
   balance += amount;
};

function validatePin(accountPin){
    
    if(accountPin === accountPinAttempt){
        accessGranted = true;
        return accessGranted;
    }
    else{return accessGranted = false;}


}

module.exports = {
    getBal : getBalance,
    withdraw : withdraw,
    deposit : deposit,
    valPin : validatePin
}