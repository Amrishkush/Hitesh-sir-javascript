//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// {} = curly bracket is called basically scopes when it comes in it comes in loops condition or functions
// we use in object also in that cas its not scope there its not scope

//var c = 30 or c= 30 it will flow outside of block scope it can be changed anywhere
//block scope mean if {} inside this is called block scope and outside this all will be called global scope 
//
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){   //fucntion stored in variable is called expression
    return num + 1
}

//even if its called before fucntion it will run the program


//this below will give error because this is expression stored in variable it was same thing but here as variable and variable cant be used before declaration
addTwo(5)
const addTwo = function(num){
    return num + 2
}
