"use strict"
const prompt = require('prompt-sync')();
const account = require('./account');


// Get Balance
function getBalance(){ 
    return balance;
};

//withdraw
function withdraw(amount){
    amount = parseInt(prompt("How much money would you like to withdraw?"));
    balance -= amount;
};

//Create a deposit
function deposit(amount){
    amount = parseInt(prompt("How much money would you like to deposit?"));
   balance += amount;
};

function validatePin(accountPin){
    let accountPinAttempt = parseInt(prompt('Please Input your PIN.'));
    let accessGranted = false;
    if(accountPin === accountPinAttempt){
        accessGranted = true;
    }
    else{return accessGranted = false;}
}

module.exports = {
    getBal : getBalance,
    withdraw : withdraw,
    deposit : deposit,
    valPin : validatePin
}