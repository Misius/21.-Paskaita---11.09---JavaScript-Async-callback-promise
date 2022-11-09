'use strict';
console.log('callback.js');


function getPost1(callBackFunc) {
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
      console.log('post1');
      // cia as noriu kviesti post2
      resolve(10);
    }, 3000);
    });
  }
function getPost2() {
    return new Promise ((resolve,reject) => {

    
    setTimeout(() => {
        console.log('post2');
        // reject('Kazkas kazkur');
        resolve(20);
    }, 2000);
    });
}
function getPost3() {
    return new Promise((resolve,reject) => {
    // throw new Error ('klaida rasant');
    setTimeout(() => {
        console.log('post3');
        
        resolve(15);
    }, 1000);
    });
}


getPost1(getPost2());

// getPost3();

// kada callback gali buti naudojamas
function makeNum(cb) {
    const rez = cb(5)
    return rez;
}

function double(num) {
    return num * 2;
}

const n1 = makeNum(double);
// double(n1);


Promise.all([getPost1(), getPost2(), getPost3(), Promise.resolve(50)])
  .then((values) => {
    console.log('values ===', values);
    const postValuesAvg = values.reduce((total, sk) => total + sk, 0) / values.length;
    console.log('postValuesAvg ===', postValuesAvg);
  })
  .catch(console.warn);
