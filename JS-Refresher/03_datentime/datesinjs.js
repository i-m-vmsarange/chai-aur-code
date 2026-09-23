//Dates
let myDate = new Date();
// console.log(myDate.toString());
// console.log(
//   `Date: ${myDate.getDate()} month: ${myDate.getMonth()} year: ${myDate.getFullYear()}`,
// );
// console.log(
//   `Time: ${myDate.getTime()} toDateString: ${myDate.toDateString()} toLocaleString: ${myDate.toLocaleDateString()} toIsoString: ${myDate.toISOString()}`,
// );

let myCreatedDate = new Date(2002, 8, 2);
// console.log(`${myCreatedDate.toDateString()}`);

// let myTimeStamp = Date.now();
// console.log(`Current time in seconds: ${Math.floor(myTimeStamp / 1000)}`);

console.log(
  `toLocaleString: ${myCreatedDate.toLocaleDateString("default", {
    weekday: "long",
  })}`,
);
