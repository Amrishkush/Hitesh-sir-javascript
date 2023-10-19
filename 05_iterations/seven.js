const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//returns value
// const newNums = myNumers.map( (num) => { return num + 10})

//chaining we can use multiple level
const newNums = myNumers
                .map((num) => num * 10 )  //new value stored
                .map( (num) => num + 1)   //operate on the new value stored
                .filter( (num) => num >= 40)  //same 

console.log(newNums);