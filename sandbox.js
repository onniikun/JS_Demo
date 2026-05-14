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