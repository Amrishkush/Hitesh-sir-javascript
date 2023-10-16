let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)   //changing to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN   //Even after converting by use Number() it will give typeof number but on logging it will give NaN 
//  true => 1; false => 0
//"null" => 

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn) //changing to boolean
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);  //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);     //it is basically 2 raised to the power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);   //122  at start it became string after that all acts as string
// console.log(1 + 2 + "2");  //32  here firstly treated as no so added then added to string it turned to string

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);    //gives 1
// console.log(+"");     //gives 1 because empty is zero

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100   //read increment and decrement on mdn imp
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion