const user = {
    username: "hitesh",
    price: 999,
 //method function in object
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//this uses basically context like above this is in the context of user
//if we print this inside scope it will show data of user bascially giving context and then we can use it


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//****intersting thing when print (this) outside scope it will give
//empty {} object becaue ther is no context available
//*****but suppose we do same thing console (this) in browser console
//***it will give {window} because here we are running in nodejs environment using engine but does not have to show
//but in browser engine run all the thing in the window everything so there show window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this)
//     console.log(this.username);
// }

//inside function if we access this it will give lot of thing of node js environment
//but if console.log(this.username) it will give undefined because {***this can be accessed in object only*****} other ways are there

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
//it will also give undefined or {} cannot access this.username same as above
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }    //adding curly means we have return compulsory

// const addTwo = (num1, num2) =>  num1 + num2  //implicit return i understand no need curly

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})  //to run object we must keep in parenthisis otherwise it will be undefined


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()