const para = document.querySelector('p');
const paraAll = document.querySelectorAll('p');

console.log(para);
console.log(paraAll);

const title = document.getElementById('page-title');
console.log(title);

const error = document.getElementById('error');
console.log(error);
// console.log(error[0]);
// error.onbeforematch(error => {
//     console.log(error);
// })

const paras = document.getElementsByTagName('p')
console.log(paras);
console.log(paras[1]);

const para1 = document.querySelector('p');
console.log(para1.innerText);
para1.innerText += ' ninjas'

const para2 = document.querySelectorAll('p');
para2.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' more new text';
});


// const link = document.querySelector('a');

// console.log(link.getAttribute('herf'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The net ninja webiste';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
