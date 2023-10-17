const score = 400 //automatically its a numbertype
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //digits after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //read it interesting and dangerous

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //1,00,000 
//mentioned en-IN so comma according to indian put commas
// console.log(hundreds.toLocaleString( ));
//if nothing mentioned then it will suppose it internation and comma according to 


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  //4
// console.log(Math.floor(4.9));  //5
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //b/w 0 and always
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)