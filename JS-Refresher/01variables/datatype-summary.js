/**
 * Primitive data types in JavaScript:
 *  7 types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
 */


const abc = "hello"
console.log(typeof abc, "abc");
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId) //false
console.log(typeof id);

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);

// console.log(null == undefined); true
console.log(typeof null);
console.log(typeof undefined);

/**
 * Reference type datatypes in Javascript: (Non-primitive)
 * 1. Arrays 2. Object 3. Functions 4. Date 5. RegExp
 */

const heroes = ["Iron man", "Bat man", "Spider man"];
const myObj = {
    name: "vmsarange",
    age: 24,
}
const myFunction = function () {
    return "from my function"
}
console.log(myFunction());
console.log(myObj);
console.log(typeof heroes, "Heroes");
console.log(typeof myObj);
console.log(typeof myFunction);


let myYoutubeName = "vmsarange";

let anotherYouTubeName = myYoutubeName;
anotherYouTubeName = "chai-aur-code";

console.log(myYoutubeName);
console.log(anotherYouTubeName);

let user = {
    email: "vmsarange@gmail.com",
    upiId: "user1@ybl"
}

