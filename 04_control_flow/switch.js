// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;   //suppose here there is no {break} but condition is true then also it will go and read all the below code 
        //so putting break will terminate whenever condition becomes true it won't go further for running code 
        //****Intersting thing if there is no break it will read all the code below but {except default} 
        //so default will be read only in any condition only when there is no match */
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}