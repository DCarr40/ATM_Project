"use strict"
const prompt = require('prompt-sync')();
const davidAccount = require('./account');


// Get Balance
function getBalance(account){ 
    return account.balance;
};

//withdraw
function withdraw(amount){
    balance -= amount;
};

//Create a deposit
function deposit(amount){
   balance += amount;
};

function validatePin(accountPinAttempt){
    
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
};