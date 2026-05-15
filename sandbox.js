console.log("Hello World!");

let age = 25;

console.log(age);
console.log(age + 4)
var score = 75;
console.log(score)


//string
console.log('hello, world')

let email = 'example@example.com'
console.log(email)

//string conecatenation
let firstName = "Nathan";
let lastName = "Natoza";

let fullName = firstName +' '+ lastName;

console.log(fullName)

//Full characters
console.log(fullName[0]);

//string length 
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName); 

let index = email.indexOf('@')
console.log(index)

let email2 = 'anexample@examplemail.com.ca';

let result2 = email2.lastIndexOf('n')
console.log(result2)

let result3 = email2.slice(9,17)
console.log(result3)

let result4 = email2.substr(0,10)
console.log(result4)

let result5 = email2.replace('m', 'w')
console.log(result5)


// Math Operators

let x = 10
console.log(x)
// Math operators: +, -, *, **, /, %
let y = 3
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

// Math order of operations PEDMAS

let answer = (3 * x / 3 * y) - 4
console.log(answer)

//NaN = not a number
console.log(5 / 'hello')

let resultNum = 'the blog has ' + x + ' likes';
console.log(resultNum)


// Template String
const title = "Blue Lock";
const theme = "Ego";
const views = 10000

// Concatenation way
let sentence = title + ' main theme is ' + theme + ' with the manga having over ' + views + ' viewers.'
console.log(sentence)

// Template string way
