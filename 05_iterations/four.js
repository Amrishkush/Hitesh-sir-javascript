const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    //{key} will print key only
    //{myObject[key]} : will print value of key
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    //console.log(key)   //0,1,2,3,4 output it will print key of array 
    //array also have keys like objects but in object we can set keys in array it is predefined basically say location
    //to print value of key same syntax {programming[key]} as above for object
    //here key are hidden
}


//it will show nothing not iterable we will see afterwards
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }