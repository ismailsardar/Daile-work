//This Async Await projects

const pement = true;
const marks = 89;

function inrole() {
    console.log('Monye is pricessing..Wait plese..');
    const myPromis = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pement) {
                resolve();      
            } else {
                reject('Pement is Failed..!!');
            }
        }, 3000);
    });
    
    return myPromis;
}

function croseRaning() {
    console.log('Your Corse is Ranig...Hard Worke!!');
    const myPromis = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            } else {
                reject(`Don't get Enough Marks..Plese Try againe..`);
            }
        }, 6000);
    });

    return myPromis;
}

function ceirtifeket() {
    console.log('Your Card is Prossing..Wait Plses..!!!');
    
    const myPromis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Congratulation..!! This is Your Card..Thanks.!!');
        }, 2000);   
    });

    return myPromis;
}

async function corse() {
    try {
        await inrole();
        await croseRaning();
        const result = await ceirtifeket();

        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

corse();