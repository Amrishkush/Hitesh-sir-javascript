
let index = 0
//this means jab tak chalana h tb tk index less than equal to 10 nahi hai
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {       //here one time do will run without cheching condition that's above 11
    //will get printed because one time without checking condition it will run
    //but now 11 is greater than 10 so after one time it won't run.
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);