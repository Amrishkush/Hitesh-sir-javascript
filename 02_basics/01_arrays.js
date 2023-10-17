// array

const myArr = [0, 1, 2, 3, 4, 5]
//this also gives access to prototype run on console of browser and see type of methods it uses we can see
//any datatype that it does support what type of prototype
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7) //add value in the last
//remember array is heap memory it will change the original myArr
// myArr.pop() //last value gets removed

// myArr.unshift(9) //add values in start but problem is that this will shift all the values in array to next position 
//which is not good makes time consumable if some big data is there
// myArr.shift() //removes from start

// console.log(myArr.includes(9)); //false can be helpful if using some conditional operations
//boolean output helpful especially in the case of condition checking
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //joins elements in the form of string type it looks similar to array but of string type 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //[1,2] 3rd element not included
//most important it doesn't change original array 
//myArr will remain same as it will slice [1,2]
//but in spice its not like that
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  
//its output is [1,2,3]
//it changes original array it would have changed 
//myArr gets changed with no value in it of [1,2,3]
//in splice left [0,4,5,6] original myArr have no 1,2,3 but in case of slice this will not happen it will slice but won't change original array. 
console.log("C ", myArr);
console.log(myn2);
