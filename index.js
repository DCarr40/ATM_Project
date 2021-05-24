"use strict"
const prompt = require('prompt-sync')();
const { getBal, deposit, withdraw, valPin } = require('./atm');

// this line works console.log(module);
//console.log(getBal(davidAccount));


//User Menu Starts Below

mainMenu();


function mainMenu() {
    let welcomeMessage = "Hello Welcome to the Bank ATM Menu";
    let departingMessage = "Thank you for banking with us. Goodbye.";
    console.log(welcomeMessage);
    let userInput = accessAcctYesNo();

    switch (userInput) {
        case "yes":
            // this line works console.log("test");
            //prompt for pin
            let successfulPin = pinValidation(); 
            while (!successfulPin) {
                successfulPin = pinValidation();
            };
            if (successfulPin) {
                let answer = "";
                do {
                    answer = menuQuestion();
                    let amount = 0
                    switch (answer) {
                        case "withdraw":
                            //asks user how much they would like to withdraw
                            amount = parseInt(amountQuestion("withdraw"));
                            withdraw(amount);
                            //place that money into the user's wallet
                            console.log(getBal());
                            break;
                        case "deposit":
                            //if negative then prompt invalid input. 
                            //
                            amount = parseInt(amountQuestion("deposit"));
                            deposit(amount);
                            //place that money into the user's wallet
                            console.log(getBal());
                            //Prompt question again
                            break;
                        case "get balance":
                            console.log(getBal());
                            break;
                    }
                }
                while (transactionQuestion());
            }
            else {
                console.log("Invalid PIN. Please Try Again.");
                return mainMenu();
            }
            console.log(departingMessage);
            break;
        case "no":
            
            console.log(departingMessage);
            break;
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


function menuQuestion() {
    let input = promptFor("Would you like to 'withdraw', 'deposit', or 'get balance'", chars);
    return input;
}

function chars(input) {
    return true; // default validation only
}

function amountQuestion(transactionType) {
    let input = "";
    let isValid = false;

    do {

        input = promptFor(`How much would you like to ${transactionType}? `, chars)
        if (!isNaN(input)) {
            if (input > 0) {
                isValid = true
            }
            else {
                console.log("That is an invalid input. Please Try again.");
            }
        }
        else {
            console.log("That is an invalid input. Please Try again.");
        }

    }

    while (
        !isValid
    )
    return input;
}


function transactionQuestion() {
    let input = promptFor("Would you like to make another transaction? Enter 'yes' or 'no '", yesNo);
    if (input === 'yes') {
        return true;
    }
    else { 
        return false; }
}


function pinValidation() {
    let attempt = accountPinAttempt();
    let pinTestResults = valPin(attempt);
    return pinTestResults;
}


