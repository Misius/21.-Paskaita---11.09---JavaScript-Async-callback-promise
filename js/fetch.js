'use strict';
console.log('fetch.js');

// norim parsisiusti is interneto duomenis
// fetch(url)
// .then(response => response.json())
// let title = 'Not set'; 
// fetch('https://jsonplaceholder.typicode.com/todos/1') 
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
// //   .then(json => console.log(json));


// .then((data) => {
//     console.log(data);
//     // document.title = data.title;
//     const title = data.title;
//     document.title = title;
// })
// .catch((err) => console.warn('Klaida gaunant posts', err));

// document.title = title;



const url =('https://jsonplaceholder.typicode.com/users');
const usersEl = document.getElementById('users');
fetch(url)
.then((response) => response.json())
.then((dataInJsFormat) => {
    console.log('dataInJsFormat ===', dataInJsFormat);
    dataInJsFormat.forEach((uObject) => {
        const oneEl = makeOneLi(uObject.name, uObject.phone);
        usersEl.append(oneEl);
    })
})
.catch((err) => console.warn('Klaida gaunant users', err));

// is gautu duomenu atvaizduoti sara sa su vardais ir telefono numeriais

function makeOneLi(name,tel) {
    const liEl = document.createElement('li');
    liEl.textContent = `Name: ${name} - tel: ${tel}`;
    return liEl;
}