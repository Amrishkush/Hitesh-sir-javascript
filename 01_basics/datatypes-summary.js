//datatypes are basically classifed into two categories on the basis 
//how the memory is getting allocated and how to access it (primitive and non primitive type)

//  Primitive  
//values stored anywheere else if you access it actually gives copy from that location

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null   //it doesn't means value is zero basically its nothing
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //false  as both are different looks same have to read

// const bigNumber = 3456543576654356754n   //n converts into big int basically



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//read it typeof everything for interviews
// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++


//Stack Memory (primitive uses)  we get copy of declared variable
  
let myYoutubeName = "amrsihpratapsingh"   

let anothername = myYoutubeName;   //it will store the above
anothername = "honey"       //this will change the value but original remains same like myYoutubeName will remain as it was bcoz a copy was given to anothername
//ek ek ke upar store hota stack ka matlab yahi hota h iska copy me change ho rha h na ki original me

//Heap Memory (non-primitive uses) we get refrence of original value it will change the value of original value


let userOne = {                       //below data was stored in heap so userOne got only reference to data
    email: "user@google.com",
    upi: "ajaljfl"
}

let userTwo = userOne       //here user two got reference only from anywhere change it will be change in main refrence

userTwo.email = "ajakj@gami.com"
console.log(userTwo.email);     //answer will be same like  ajakj@gami.com
console.log(userOne.email);     //answer will be same like  ajakj@gami.com    


//as it will change the main data as both were taking refernce directly not making copy of original