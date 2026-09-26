//singleton


//object literals
//Object.create
const mySym = Symbol("myKey1")
const JsUser = {
    name: "Vaishnavi",
    "Full Name": "Vaishnavi Sarange",
    [mySym]: "myKey2",
    age: 24,
    location: "Pune",
    email: "vmsarange@gmail.com",
    lastLoginDays: ["Monday", "Tuesday"],
    isLoggedIn: false
}
console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(typeof JsUser[mySym]);

const user = Object.create({
    name: "Hitesh",
    fullname: "Hitesh Choudhary",
    city: "Jaipur",
    email: "hitesh@coding.com"
})

// console.log(`JsUser: ${JsUser.getPrototypeOf()}`); // getPrototypeOf is not a function
// How to change objects values
JsUser.email = "hitesh@gmail.com";

console.log(JsUser);
Object.freeze(JsUser); //It is use to freeze object
JsUser["Full Name"] = "Hitesh Chaudhary";

console.log(JsUser);

// In javascript functions are treated as 