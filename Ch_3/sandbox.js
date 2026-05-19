/**
 * For loops
 */
for(let i = 0; i < 5; i++){
    console.log(`in loop:`, i)
}
console.log('loop done.')

// For loops with data
const names = ['shaun', 'mario','luigi']

for(let i = 0; i < names.length; i++){
    // console.log(i)
    // console.log(names[i])
    let html = `<div>${names[i]}</div>`
    console.log(html)
}

/**
 * While Loops
 */
// let i = 0

// while(i < names.length){
//     console.log(names[i])
//     i++;
// }

// do while loops
let i = 5
do{
    console.log(`val of i is`, i)
    i++;
} while(i < 5);

/**
 * If statements
 */

const age = 25;

if(age > 20){
    console.log(`you are over 20 years old.`)
}

const ninjas = ['shaun', 'sae', 'ryu', 'chun-li']

if(ninjas.length > 3){
    console.log("that's is a lot of ninijas")
}

// Else if statement
const password = 'pass123123'; 

if(password.length >= 10){
    console.log(`password is long enough.`)
} else if(password.length >= 6){
    console.log(`password isnt long enough.`)
} else {
    console.log(`password isnt long enough.`)
}
