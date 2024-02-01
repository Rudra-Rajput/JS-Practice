function sayMyName() {
    console.log("Rudra Singh");
}
// sayMyName()


// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumber(5, 20)


function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // console.log("Rudra");
    // return result
    return num1 + num2
}
const result = addTwoNumber(5, 20)
// console.log("result :", result);

function loginUserMessage(userName) {
    if (userName === undefined) {
        console.log('Please enter a user name');
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage());


function calculateCartPrice(...num) {
    return num
}

// console.log(calculateCartPrice(200, 2000, 500, 100));


const user = {
    userName: "Rudra Singh",
    price: 5000
}

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.userName} and user price is ${anyObject.price}`);
}
// console.log(handleObject(user));
console.log(handleObject({
    userName: "Sam",
    price: 3000
}));