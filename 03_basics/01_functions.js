
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//declared variable is called generally parameters
//given value while calling function is called arguments
function addTwoNumbers(number1, number2){    //number1 , number2 is parameter

    // let result = number1 + number2
    // return result
    return number1 + number2   //always return not console because so it can be save in variable to return will not print answer so save this call function in the variable then console variable then it will show the value
    //after return suppose we give some console it wont give anything because it will return if we give return first so return should be last to run all the code
}

const result = addTwoNumbers(3, 5)        //3,5 will be called here arguments

// console.log("Result: ", result);    //here above function if contains console.log then it wont save in variable as its available on console so always return in function to get value and to be stored in variable


function loginUserMessage(username = "sam"){  //set default value so that nothing passed default get printed means it can never be undefined its also used
    if(!username){   //if not username !username then run or use this //(username === undefined)
        console.log("PLease enter a username");
        return   //if this runs it will return from here otherwise it will read next line
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("")) //it will print value with username only
//just logged in
//console.log(loginUserMessage()) 
//undefined just logged in  
//if we leave it completely blank then it will show undefined on the place of username

//... is called rest operator as well as spread operator according to situation
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//if want to give multiple values then use ... this operataor
//... means pack all the data and give in num1 will give array
// multiple then val1= 200 val2 = 400 and num1 = [500, 200] 
//if some one else mentioned then it will store according to order and remainin in variable with spread operator
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   passed user object in handleObject function which will be received in anyobject parameter
handleObject({        //directly also we can pass the object
    username: "sam", 
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  //same as object we can pass 
console.log(returnSecondValue([200, 400, 500, 1000]));