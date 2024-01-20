let score = "25"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

console.log(valueInNumber);

// "25" => 25
// "25abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0

let valueInBoolean = Boolean(isLoggedIn)
console.log(valueInBoolean);
console.log(typeof valueInBoolean);

// 1 => true; 0 => false
// "" => false; "hey" => true

let age = 35
let ageInString = String(age)
console.log(ageInString);
console.log(typeof ageInString);