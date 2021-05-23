"use strict"
const prompt = require('prompt-sync')();
const { getBal, deposit, withdraw, valPin } = require('./atm');

// this line works console.log(module);
//console.log(getBal(davidAccount));


//User Menu Starts Below

mainMenu();


function mainMenu() {
    let welcomeMessage = "Hello Welcome to the Bank ATM Menu";
    console.log(welcomeMessage);
    let userInput = accessAcctYesNo();

    switch (userInput) {
        case "yes":
            // this line works console.log("test");
            //prompt for pin 

            let attempt = accountPinAttempt();
            let pinTestResults = valPin(attempt);
            // make this a function
            if (pinTestResults === true) {
                console.log("Welcome David! What would you like to do today?");
                switch (answer) {
                    case "withdraw":
                        //asks user how much they would like to withdraw
                        //withdraw that amount from the users account
                        //place that money into the user's wallet
                        //display current balance after withdrawal
                        //Prompt question again
                        break;
                    case "deposit":
                        //asks user how much they would like to withdraw
                        //withdraw that amount from the users account
                        //place that money into the user's wallet
                        //display current balance after withdrawal
                        //Prompt question again
                        break;
                    case "get balance":
                        //asks user how much they would like to withdraw
                        //withdraw that amount from the users account
                        //place that money into the user's wallet
                        //display current balance after withdrawal
                        //Prompt question again
                        break;
                }
            }
            else {
                return mainMenu();
            }
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

function accountPinAttempt() {
    let pinAttempt = parseInt(prompt('Please Input your PIN. '));
    return pinAttempt;
}

function accessAcctYesNo(input) {
    input = promptFor("Would you like to access your account? Enter 'yes' or 'no'", yesNo);
    return input;
}

function yesNo(input) {
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function promptFor(question, valid) {
    do {
        var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
}

//amount = parseInt(prompt("How much money would you like to withdraw?"));


// amount = parseInt(prompt("How much money would you like to deposit?"));

