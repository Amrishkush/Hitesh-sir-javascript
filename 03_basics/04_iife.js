// Immediately Invoked Function Expressions (IIFE)
//if we want to run something immediately 
//sometimes there is problem from global scope pollution to remove its pollution we use iife syntax

//it have name like chai so its also called name iife also
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //always keep semicolon after iife if you want to write also to iife invoke function otherwise it won't end  and will create problem for other function give errro always keep semicolon

//array function also supports iife
(()=>{})();
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


//above we can do same thing pass here only basically we are calling directly
