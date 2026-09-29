// const tinderUser = new Object();

const tinderUser = {};

tinderUser.name = "Vaishnavi Sarange";
tinderUser.email = "vmsarange@gmail.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Vaishnavi",
      lastname: "Sarange",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
// const obj3 = { ...obj1, obj2 }; this is not going to work
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.entries(tinderUser)); // return an array of key value pairs
// console.log(tinderUser.hasOwnProperty("myName"));

const course = {
  name: "Learn javascript",
  courseInstructor: "Hitesh Choudhary",
  location: "Jaipur",
};

const { courseInstructor: instructor } = course;
console.log(instructor);
