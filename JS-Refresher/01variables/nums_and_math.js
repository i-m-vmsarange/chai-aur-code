// const score = 400;

// const balance = Number(400);

// console.log(`score: ${score} balance: ${balance}`);
// console.log(`balance: ${balance.toString()}`);
// console.log(balance.toFixed(1));

// const otherNumber = 23.8999;

// console.log(`otherNumber: ${otherNumber.toPrecision(2)}`);

// const hundreds = 1000000;
// console.log(`hundreds: ${hundreds.toLocaleString("en-IN")}`);

// +++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); // Object
// console.log(Math.abs(-44)); // absolute value
// console.log(Math.round(4.1)); // 4
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.9)); //4

// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

//                                      20 - 10 + 1 = 11
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
