//this is callback Projects

const pement = false;
const marks = 83;

function inroleCorse(callback) {
    console.log('Your Inrole is Proseds...👨‍🌾👩‍🌾');

    setTimeout(() => {
        if(pement){
            callback();
        }else{
            console.log('Pement is Failed.....');
        }
    }, 3000);
}

function croseRaning(callback) {
    console.log('your Corse is Raning..🕵️‍♀️👮‍♂️');

    setTimeout(() => {
        if(marks >= 80){
            callback();
        }else{
            console.log("You don't have enouge marks. Plese try again...");
        }
    }, 4000);
}

function getCertficet() {
    console.log('Certficket is prosed....');

    setTimeout(() => {
        console.log('Congrulation!..This is your Certficket..');
    }, 2000);
}

inroleCorse(function() {
    croseRaning(getCertficet);
});
