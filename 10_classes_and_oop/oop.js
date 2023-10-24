
//this is object literal means literally object 
//key properties , methods(means functions in object)
//abc.toLowerCase() ///see this method already defined inside object we use basically its same like we access soemthing in object by using dots(.) like  user.username
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        //kewal username print hoga hi nhi yah bhale andar yeh kre console.log(username)
        //kuch nhi aayega kyunki yeh browser me user jaayega global context me save ho jaayega
        //pr getUserDetails() to yaha function h to iske liye alaga context banta h hmne padha tha iske liye username bahari hogya to isko pta nhi chelga 
        //isliye isko batana padta this.username likh ke batana padata h jo bahaar se lena h cheez wo apna wala hi samaan hai
        console.log(this); // basically poora object jo memory ke andar rkha gya h poora de dega simple mtlb user
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);   //yaha this ki value {} empty aati h mtlb global context me nhi kyunki global context change hoti rehti h
//web browseer console krne pe this hame window milta pahela se waha global context me bhut si cheezein rkhi hui h

//const promise = new Promise () //yaha jo (new) use ho rha h aur bhi jagah use hota h
//(new) ek constructor function h basically mtlb ek hi object literal se multiple instances bana skte mtlb memory me save nhi ho rha h hmne padha tha context wale me do banta h memory phase and execution phase yaha pe yeh memory phase me jaayega value diya hi nhi h jaise neeche kuch value assign hi nhi kr rhe h hum neeche jaake hum value daal rhe utne baar naya user create ho rha h 


function User(username, loginCount, isLoggedIn){
    this.username = username;   //myusername : username bhi likh skte h pr practice yeh rehta this.username same use krne ka aur this kuch hai nhi empty hi rehat h hmne dekha tha upar daalte jaao jo bhi receive ho //aur this ek variable ki trh kaam krta h basically
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)  //yaha new use krne se naya instance copy ban jayega mtlb agar new nhi lagayenge to neeche jb userTwo daalenge to wo is waale ko replace kr dega to wo userTwo save ho jaayega is trh naya copy ban jayega user name ke object me hi par par allag copy me h
// User{uername: "hitesh" , 12 , true}
//User{username: "ChaiAurCode", 11, false} 
//do copy create ho jaayegi new use nhi krne se overwrite krta rhega ek hi ban paayega 
//mtlb naya object create ho jaaya h har baar
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); //new ke karan constructor function call hota h //constructor kuch nhi reference hota h apne hi baare yaha refer krega (User) ko
//console.log(userTwo);

//read instance of