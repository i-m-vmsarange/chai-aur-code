const score = 400;

const balance = Number(400);

console.log(`score: ${score} balance: ${balance}`);
console.log(`balance: ${balance.toString()}`);
console.log(balance.toFixed(1));

const otherNumber = 23.8999;

console.log(`otherNumber: ${otherNumber.toPrecision(2)}`);

const hundreds = 1000000;
console.log(`hundreds: ${hundreds.toLocaleString("en-IN")}`);