"use strict"; // treat all JS code as newer version  

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")       
/**
 console.log("Hitesh") console.log("Hitesh")  //it will show error
 //this will not show error as its in different line that doesn't mean that semicolon is necessary 
 console.log("Hitesh")
 console.log("Hitesh")
 console.log("Hitesh"); console.log("Hitesh") // this will not show error but its not great idea to write decreases readibility
 */


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint =>  bigger than number value then we use likely we don't used
// string => ""
// boolean => true/false
// null => standalone value its not like this let a = "" its not null null itself a type so we assign null basically like let a = null 
// undefined => //when value is not defined basically
// symbol => unique


// object
console.log(typeof name ); // will give string output
console.log(typeof undefined); // undefined   //imp
console.log(typeof null); // object   //imp
