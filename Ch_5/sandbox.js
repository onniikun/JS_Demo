// object literals

let user = {
    name: 'crystal',
    age: 20,
    email: 'crystal@example.com',
    location: 'NYC',
    food: ['chopped cheese', 'spicy mayo salmon & rice'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written');
        this.food.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user)
console.log(user.name)

user.age = 24;
console.log(user.age)
console.log(user['name'])

const key = 'location';
console.log(user[key])

user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);

user.logBlogs();
console.log(this);

// math objects
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 5

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random()

console.log(random)
console.log(Math.round(random * 10));

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.name = 'chun-li';
console.log(userOne, userTwo);

user.logBlogs();
console.log(this);


// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);