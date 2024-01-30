// Singleton
// Object.create

// Object literals
const mySymbol = Symbol("Hey")

const users = {
    name: "Rudransh",
    [mySymbol]: "Hey1",
    "full name": "Rudra Pratap Singh",
    email: "rudra@gmail.com",
    phone: 9555123085,
    isLoggedIn: false
}

// Object.freeze(users)
// users.name = "rudraaaanshhhh"

users.greeting = function() {
    console.log(`hey this ${users.name}`);
}

users.greetingTwo = function() {
    console.log(`hey this ${this.name}`);
}

// console.log(users.greetingTwo());
// console.log(users.greeting);



/******************************************OBJECT PART TWO********************************************* */



const myObj = new Object() // This is singleton object
const myObjTwo = {} // This is non-singleton object

myObjTwo.name = "Rudra"
myObjTwo.email = "r@gmail.com"
myObjTwo.phone = 9555123085

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "e", 5: "f", 6: "g"}
const obj3 = {7: "h", 8: "i", 9: "j"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);

// console.log(myObjTwo);
// console.log(Object.keys(myObjTwo));
// console.log(Object.values(myObjTwo));
// console.log(Object.entries(myObjTwo));
// console.log(myObjTwo.hasOwnProperty("email"));