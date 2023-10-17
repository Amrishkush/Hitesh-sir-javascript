// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //it will give to objects inside objects won't merge
// const obj3 = Object.assign({}, obj1, obj2, obj4) //it will merge good // {} used without this it will run but good habit to use it

const obj3 = {...obj1, ...obj2} //mostly used
// console.log(obj3);

//when things come from api it comes like this how to use it
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //it will give all the keys in tinderUser interesting thing is that it gives output in array form which is interesting we can apply loop etc. { very important}
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check whether property is there or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//below we are doing destructuring
// course.courseInstructor  //in this we have to always use dot its problem
const {courseInstructor} = course
//above it will give courseInstructor value from course without writing course.courseInstructor
// console.log(courseInstructor); //just writing this

//suppose we want to change the name of that key in this page different name we can change like below
//coureInstructor: instructor now we can use name instructor no difference
const {courseInstructor: instructor} = course


console.log(instructor);
//like we do props drilling when we recieve data from any other components we can like this only
// {courseInstructor: instructor} like this we send data and receive in other components

//we can get sometime api in the form of object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// sometimes in the form array  as a json 
[
    {},
    {},
    {}
]

// search random userme api famous for use
//copy data from there but its difficult to understand data as it preseent in different levels
// as well as in different data types
//so search json formatter and paste data there it converts into tree by pasting beautify and formatter
//it will easily show data type level inside inside easily to understand
