const userEmail = []
//means asking if(userEmail) without any condition on the basis of it's present or not it show truth or false call truthy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//To check empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {    //here object.keys of emptyObj finds keys inside and gives output in array form whose length can be calculated to compare so means we are opereating on array making from object
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//this is only made for null and defined

//?? assigns first value so that suppose we are calling something from server
//sometimes we get two values like null undefined or data
//?? this will assign something atleast like null so that on the basis of which will code run
//other code will not work
let val1;
// val1 = 5 ?? 10   //value assigned 5 in both instances value came so first one is assigned
// val1 = null ?? 10  //value assigned 10 its checking whether value came or not then assign value one not null
// val1 = undefined ?? 15   //15 assigned
val1 = null ?? 10 ?? 20     //10 jo first wo assign ho jaayega



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")