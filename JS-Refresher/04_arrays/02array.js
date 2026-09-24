const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ["superman", "batman", "flash"];

// marvel_heroes.push(dc_heroes);


// for (let i = 0; i < dc_heroes.length; i++) {
//     marvel_heroes.push(dc_heroes[i])
// }
// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const all_heroes_2 = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes_2);

const another_array = [1, 2, 3, 4, [4, 5, 6], [7, 8, 9], 10, 11];
const real_array = another_array.flat(Infinity);

console.log(real_array);

console.log(Array.isArray("Vaishnavi"));
console.log(Array.from("Vaishnavi"));
console.log(Array.from({ name: "Hitesh" })); //Interesting

const score = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score, score2, score3));