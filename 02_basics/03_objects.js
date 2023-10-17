// singleton
// Object.create  //this method is called constructor method

// object literals //below through literals method

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //this can't be accessed by .method but we have to access by differnt method as it have space won't be allowed by .method 
    [mySym]: "mykey1",  //declaring symbol in mySym above declared type symbol[key1] 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)

//below is good method above is also good mostly used .method below important for interview
//as object key is in string or not  it always take as string
//in this method always give things in string form
//its same as JsUser.email will give same output
// console.log(JsUser["email"])

//but below "full name" this type of key can't be access by like
//JsUser.full name 
//its only possible by this way only below one 
// console.log(JsUser["full name"])
//it can be accessed here only below like no need of " " bcoz its symbol
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // will freeze won't be able to change the value of that object after this 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //value of email will not change as bcoz object is freezed above

//function also acts varible but don't forget to remove above freeze otherwise it wont change will show erro
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //in same object we want to access other just give this.name only this
}

console.log(JsUser.greeting()); //always use () infront function key to access it //other wise it will give only that its a function if we don't use () this
console.log(JsUser.greetingTwo());