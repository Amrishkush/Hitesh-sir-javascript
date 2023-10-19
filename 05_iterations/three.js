// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // 1 2 3 4 5  will print all the elements of the array in num form
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`) //it will print each character of the strings even with the space seperately //to skip space we can use break or continue 
}

// Maps
//it stores key value pairs but only unique key pairs
//like below it will not add India again 
//will be there in the same order we inserted
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  


// console.log(map);

for (const key of map) {
    // console.log(key);   //will give key and pairs both in the form of array
}



for (const [key, value] of map) {
    // console.log(key, ':-', value); //if we want to get separataely then write this only for keys and value without being in the array
}

//map is iterable but below we can see that below is not iterable 
//below we can't iterate over object but other methods are present we will study it 


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   
//     console.log(key, ':-', value);
    
// }