// const name = "hitesh"
// const repoCount = 50;
// console.log(`Hello ${name}, how are you? I think you have over ${repoCount} repositories on your github`);

const gameName = new String('hiteshhc')
console.log(`gameName: ${gameName}`);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2
console.log(gameName.__proto__);
console.log(gameName.split("e")); //'hit' 'shhc'

const subString = gameName.substring(0);
console.log(`new String: ${subString}`);

const sliceString = gameName.slice(-8, 4)
console.log(`sliceString: ${sliceString}`); //

const trimString = "   hitesh   ";
console.log(`trimString: ${trimString.trim()}`);

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replaceAll("%20", "-"));