const myArr = [1, 2, 3, 4, 5, true, false, "hi"];

for (let i = 1; i <= 3; i++) {
  myArr.pop();
}

console.log(myArr.push(99)); // returns new length of array
console.log(myArr.unshift(101)); // returns updated array length
console.log(typeof myArr.join());
console.log(myArr.slice(0, 3)); // returns only elements which are removed does not make any change in original array
console.log(myArr.splice(0, 3)); //returns elements which are removed and manupulates original array as well
console.log(myArr.includes(99));
console.log(myArr.indexOf(99));
console.log(`result array: ${myArr}`);
