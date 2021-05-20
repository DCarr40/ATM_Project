"use strict"
//set balance to 0.00
let balance = 0;

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

function validatePin(amount){
    balance -= amount;
};

module.exports = {
    getBal : getBalance,
    withdraw : withdraw,
    deposit : deposit,
    valPin : validatePin
}