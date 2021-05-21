"use strict"
const prompt =  require('prompt-sync')();
const { getBal, deposit, withdraw, valPin } = require('./atm');

// this line works console.log(module);
//console.log(getBal(davidAccount));


//User Menu Starts Below

mainMenu();


function mainMenu(){
    let welcomeMessage = "Hello Welcome to the Bank ATM Menu";
    console.log(welcomeMessage);  
    let userInput = accessAcctYesNo();

    switch(userInput){
        case "yes":
            console.log("test");
            //prompt for pin  
            accountPinAttempt();
            //validate pin 
            //valPin
            //go deeper if true
            //return to main menu if false
        break;
        case "no":
            //TODO 
            console.log(welcomeMessage);  
        break;
        default:
        return mainMenu(); // ask again
    }
}

function accessAcctYesNo(input){
    input = promptFor("Would you like to access your account? Enter 'yes' or 'no'", yesNo);
    return input;
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

function accountPinAttempt(pinAttempt){
    pinAttempt= parseInt(prompt('Please Input your PIN.'));
    return pinAttempt;
}