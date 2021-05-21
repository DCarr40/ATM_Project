"use strict"

const { getBal, deposit, withdraw, valPin } = require('./atm');

// this line works console.log(module);
console.log(getBal(davidAccount));


//User Menu Starts Below


function mainMenu(){
    alert("Hello Welcome to the Bank ATM Menu");
    accessAcctYesNo(input);

    switch(input){
        case "yes":
            //TODO 
        break;
        case "no":
            //TODO 
        break;
        default:
        return mainMenu(); // ask again
    }
}

function accessAcctYesNo(input){
    input = promptFor("Would you like to access your account? Enter 'yes' or 'no'", yesNo).toLowerCase;
}

function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function promptFor(question, valid){
    do{
      var response = prompt(question).trim();
    } while(!response || !valid(response));
    return response;
}

//amount = parseInt(prompt("How much money would you like to withdraw?"));


// amount = parseInt(prompt("How much money would you like to deposit?"));

//accountPinAttempt = parseInt(prompt('Please Input your PIN.'));