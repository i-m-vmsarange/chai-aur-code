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