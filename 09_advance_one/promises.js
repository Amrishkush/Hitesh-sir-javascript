 const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()    //yaha data aata hai basically data aaya to resolve kro jo ki .then wall resolve function
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");   //resolve wala function yaha aa rha .then ka mtlb yahi h
})

new Promise(function(resolve, reject){       //kewal without variable bhi likh skt
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){          //resolve wala part
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})    //generally data object ke rup me atta dekhe toh resolve hoke print hogya
    }, 1000)
})

promiseThree.then(function(user){  //resolve wala part  yaha data receive kiye user me resolve me dalla gya 
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){    //resolve reject dono use krke dekhenge
    setTimeout(function(){
        let error = true           //error me true false krne ke liye
        if (!error) {                    //agar error nhi aaya to yeh run karna
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')  //nhi toh yahi reject krdo baat hi khtm ho jayega
        }
    }, 1000)
})

 promiseFour
 .then((user) => {              //yaha bhi value hum receive kiye user me resolve        
    console.log(user);
    return user.username   //par yaaha us data ko access krke use value extract krna chahte h jo ki nhi hoga uske andar ki value console nhi hoga username isliye return krenge uss value ko doosre function me tb value milega
}).then((username) => {        //yaha pe return kiya hua peechle .then me ka value yaha recieive kiye h hum log username me
    console.log(username);       //ab yaha print ho jaayega 
}).catch(function(error){           //yaha ab kuch access krne me error ho jaaye tab
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  //iska mtlb message h jaise ki resolve hogya sb operations ho gya to likhna everything successful h yeh kuch bhi ho run hoga hi



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){     //response aa rha khi function se
    try {
        const response = await promiseFive    //resolve wala part
        console.log(response);      
    } catch (error) {   //reject wala part  //true h toh upar toh error ayega
        console.log(error);
    }
}

consumePromiseFive()


// async and await method -- upar humne promise create kiya h yaha api ke through promise receive kiya h isliye upar thoda alag h dhyan se dekhna
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')   //fetch api link leta h response ke liye hum wait kr rhe h api se time lg skta

//         const data = await response.json()    //yeh bhi error show kr dega agar await nhi lagayenge kyunki kewal api jruri nhi h ki time leta h aur bhi cheezein h jaise ya time json me badlne me lagega nhi await lagane pr error aa jayega kyunki avi change hua h nhi aage badh gye simple 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//


//.then method wala api ke through promise receive hua uspe hum then laga rhe h 
// upar hum promise banake uspe .then lagaye h same h dhayan se dekho
//hitesh sir js part 2 chai aur code
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()  ///direct yaha nhi access hoga upar hmne dekha yeh return wala function h
})
.then((data) => {
    console.log(data);     //data upar return hua h yaha receive hoga aur hm access kr skte h
})
.catch((error) => console.log(error))


//interesting baat yaha yeh niche jo sabse last me data recieve kiye api se wo pahele mil raha h aur sabse upar waale  promise jo bhi banaye h hum baad me console me dikha rha h sb shi run kr rha pr

//We have read for asnchronous operations it is sent to task queue which is then checked by event whether time has came or not to execute delayed functions or apis then it sent to call stack again. this is for asynchronous operations like api set timeout set interval etc ---------see image copied in the main folder -----------see it

//fetch() is also asynchoronous but it creates its own task queue called microtask queue similar but different for fetch only (which will be prior queue then others in differeent queue like set interval etc)  fetch() queue will be priority then others async task queue both are async but fetch has priority added first 

//agar same 1 sec pe dono trh queue hai toh fetch jeet jaayega pr ab 4 sec 5 sec lgega fetch ko tb baat alag mtlb priority jayada hmesha jb ladai ho jaaye brabari pe mtlb tb

//fetch ka do part me hota 
       //----pahela thing private memory create hota h --- (Data)
                           // --  1. (onfulfilled[]) (resolve) , (onRejection[])(reject)do array hota 
                           //par yeh array accesible nhi hota direct data nhi bhej skte dono me
      //-----doosra thing web browser/node me hota hai isme ---(network request) jaata h isliye browser ya node js chahiye beech me bhejne ke liye
      //netowrk pe jaayega
                           // 1 (request jaayega)  2 (request nhi jaayega)
                           // 1 request chla gya to onfullfulled[] me jaayega yaaha tak 404 error bhi network pe gya request ggya to hi pta chla to yeh onfullfilled me hi jaayega basically pauchne se mtlb error aayye ya nhi
                           //2 request jaa hi nhi paaya to onRejection[] me jaayega 
    // data jo memory jo bhi  private rehti h aur empty rehti h ab request fullfill hogi ya reject mtlb (onfulfilled[]) (resolve) , (onRejection[])(reject) in dono me aayegi jisme function hoti wo recieive krta h fir data me save krta h jo ki hmko response me api se jaise milta isiliye wo directly accessible nhi hota h do baar hmko .then .then lagana padta h

//read fetch api documentation in detail on mdn docs
//fetch api library introduced in node.js in approx 2021 by made own web stream 
// promise.all
// yes this is also available, kuch reading aap b kro.