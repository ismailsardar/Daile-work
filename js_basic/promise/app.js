const pementSuccess = true;
const marks = 76;

function inrole() {
    console.log('Pement is Prosening...');
    const promis = new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (pementSuccess) {
                resolve();      
            } else {
                rejects('Pement Prosening is Faild...');
            }
        }, 3000);
    });

    return promis;
}
function coresProses() {
    console.log('Your Cours is Rening...>>>');
    const promis = new Promise((resolve, rejects) => {
        setTimeout(() => {
            if(marks >= 80){
                resolve();
            }else{
                rejects('Your marks is not Fullfile pass requriment...Plese try agine..');
            }
        }, 5000);
    });

    return promis;
}
function certfeket() {
    console.log('Certfeket is being prosed...');
    const promis = new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('Congrulation!!!!..Your Card is Ready..Thanks');
        }, 2000);
    });

    return promis;
}

inrole()
    .then(coresProses)
    .then(certfeket)
    .then((value)=>{console.log(value);})
    .catch((error)=>{console.log(error);});