const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;  //will give output undefined as its value is not defined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"   //it will change as it working without mentioning the datatypes name  but not good practice

console.log(accountId);

//this is the way used to write multiple line comments /** */
/*       
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
//above line will show the value in console in the table form 


// to run file without run extension above node ./folder/varibles.js is the way is the raw way to run a program