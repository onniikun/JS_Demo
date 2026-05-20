/**
 * Function declaration
 */
function greet(){
    console.log('hello world!')
}

greet();

// function expression
const speak = function(){
    console.log('good day')
};

speak();

// arguments & parameters
const speak2 = function(name = 'nathan', time = 'night'){
    console.log(`good ${time} ${name}`)
};

speak2();
speak2('shaun', 'day');



// returning values
const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area
};

const area = calcArea(5)
console.log(area)

// arrow function
const calcArea2 = radius => 3.14 * radius**2;

const area2 = calcArea(5)
console.log('This is the 2nd area',area2)

// arrow function example tuning

const exampleFunction = () => "Hello World."

const example = exampleFunction()
console.log(example)


// arrow function example tuning 2

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total;
};

console.log(bill([10,15,30], 0.20))

const bill2 = (product, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax
    }
    return total;
};

console.log(bill([10,15,30], 0.20))


// functions vs methods

const name = 'nathan';

//functions
const greetings = () => 'this is a function';

let resultOne = greetings();
console.log(resultOne);

//methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);

//Callback & foreach

// const myFunc = (callback) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(function(value){
//     console.log(value)
// })

let people = ['shaun', 'mario','luigi'];

people.forEach(function(){
    console.log('something');
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson)

// ui refernece

const ul = document.querySelector('.people2')

const peoples = ['shaun', 'mario', 'luigi'];

let html = ``;

peoples.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html;


