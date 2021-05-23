"use strict"

//This should create an obj
let davidAccount = {

    firstname: "David",
    lastname: "Carruthers",
    accountPin: 12345,
    balance: 1000

};

let davidWallet = {

    walletBalance: 0,

}

module.exports = {
    davidAccount: davidAccount,
    wallet : davidWallet
};
