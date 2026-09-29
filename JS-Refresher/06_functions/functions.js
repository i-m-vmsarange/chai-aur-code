// function sayMyName() {
//   console.log("V");
//   console.log("A");
//   console.log("I");
//   console.log("S");
//   console.log("H");
//   console.log("N");
//   console.log("A");
//   console.log("V");
//   console.log("I");
// }

// console.log(sayMyName());
function addTwoNumbers(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  return result;
}
console.log(addTwoNumbers());

function loggedInUser(username) {
  if (username === undefined) return "Please enter a username";
  return `${username} is logged in...`;
}
console.log(loggedInUser());

function addNumbers(val1, val2, ...nums) {
  const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return val1 + val2 + sum;
}
console.log(addNumbers(1, 2, 3, 4, 5));

const user = {
  username: "Vaishnavi",
  location: "karvenagar",
};

function handleObject(anyObject) {
  console.log(
    `Hi my name is ${anyObject.username} and I am from ${anyObject.location}.`,
  );
}
console.log(
  handleObject({
    username: "monica",
    location: "new york",
  }),
);

const myArray = [10, 20, 30, 40, 50];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue([500, 200, 100, 300]));
