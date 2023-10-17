const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
//in console of browser we can see prototype which strings support or function as method like below various are there

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //always write in double quote

const newString = gameName.substring(0, 4)
console.log(newString); //hite //last value is not included 4 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); //accept -ve value

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //works only on white space basically

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //searches "%20" and repalces with -

console.log(url.includes('sundar')) //checks whether it is present in string

console.log(gameName.split('-')); //splits in the form of array separated by '-' or by space or anything