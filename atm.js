"use strict"
const prompt = require('prompt-sync')();
const { davidAccount } = require('./account');
const { wallet } = require('./account');

// Get Balance
function getBalance(account) {
    return davidAccount.balance;
};

function getWalletBalance(wallet){

};

//withdraw
function withdraw(amount) {
    davidAccount.balance -= amount;
};

//Create a deposit
function deposit(amount) {
    davidAccount.balance += amount;
};

function validatePin(attempt) {
    let accountPin = davidAccount.accountPin;
    console.log(davidAccount.accountPin);
    if (accountPin === attempt) {
        return true;
    }
    else { return false; }
}

module.exports = {
    getBal: getBalance,
    withdraw: withdraw,
    deposit: deposit,
    valPin: validatePin
};