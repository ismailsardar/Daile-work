//This is Promise Projects

const text = true;

console.log('Text 1');

const firstProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text) {
               resolve('Text 2');
            }else{
                reject('Failed...!!!!!');
            }
        }, 2000);
    
});

firstProm
       .then((value)=>{console.log(value);})
       .catch((error)=>{console.log(error);});

console.log('Text 3');