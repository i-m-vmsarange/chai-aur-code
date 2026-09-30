const user = {
  username: "vaishnavi",
  age: 24,
  welcomeMessage: function () {
    console.log(this);
    console.log(`${this.username}, welcome to website`);
  },
};
// user.welcomeMessage();
// Object.seal(user);
// user.username = "sam";
user.welcomeMessage();

console.log(this);

const chai = () => {
  let username = "saami";
  console.log(this);
};
chai();

const addTwo = (n1, n2) => ({
  username: "vmsarange",
});
console.log(addTwo());
