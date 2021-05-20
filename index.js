"use strict"
let async = require("async");
const yesno = require('yesno'); 
const { davidAccount } = require('./account');
const { getBal, deposit, withdraw, valPin } = require('./atm');


// this line works console.log(module);
// this line works console.log(getBal(davidAccount));


//User Menu Starts Below
const accessAccountYesNo = await yesno({
    question = prompt("Hellow would you like to access your account?")
});
