'use strict';
console.log('promise.js');



// promise anatomy
function pr1() {
    return new Promise((resolve,reject) => {
        // kazkkia logika
        let noError = true;

        if  (noError === true) {
            resolve('Ok');
        } else {
            //  kai yra klaidų
            reject('Bad Bad thing happend');
        }
    });
}
const rez = pr1();
console.log('rez ===', rez);

pr1()
    .then((ats) => {
         console.log(ats)
         return ats.toLowerCase();
        })
    .then((antrasThen) => console.log('antrasThen ===', antrasThen))
    .catch((err) => console.warn(err));
