function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  //   two();
}
one();

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(10)); as we have hold function here in a variable declared with const hoisting is not supported
const addTwo = function (num) {
  return num + 2;
};
