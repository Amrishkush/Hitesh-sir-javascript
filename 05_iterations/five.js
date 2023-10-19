const coding = ["js", "ruby", "java", "python", "cpp"]

//callback means simple function must be called
//we can store all the coding array data in val or any name 
//we can do whatever we want now in the function
// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

//we can function to foreach also but give only reference
//don't call function like coding.forEach(printMe()) no need just printMe enough it will do by itself
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {   //we get item one by one index also as well as whole arr above
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )