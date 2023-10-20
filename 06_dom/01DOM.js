 /*
 In console of browser we can do console.log(window) -  which is a object.  Inside we can see the prototype in which Document is there. which is also object so we can access like console.log(window.document) 
 which will show our html body etc means code but browser knows so we don't always need to write window.document We can also access by just document also.
 With console.log(document) only we will se document means html. Some hidden things which we saw in the window inside which document we can see directly by
 console.dir(document) 
 */
 
//document is object function getElementById is method inside object which takes parameter id name.
document.getElementById('title')  //will give full element according to id {title}

document.getElementById('title').id   //will give only id name that is title inside title element

document.getElementById('title').className //will class mentioned inside element with id title --- Here in dom we use className not class reason behing we use className in reactjs that also works in hood on dom manipulation only.

document.getElementById('title').getAttribute('id') //will give value of id attribute inside the element with id title that is title 

document.getElementById('title').getAttribute('class') //will give vlaue of class attribute

document.getElementById('title').setAttribute('class' , 'test' , 'heading') //adding value to attribute like here class attribute we are giving values like test and heading. But remember it will overwrite the previous value

//basically this all are object so we can access all through dot(.) like key and values which is here attributes are there

const title1 = document.getElementById('title'); //we can save inside a variable all the element with id title and afterwards we can access just by writing {title1}

//same way we write inline css we write vlaues inside styles 
title1.style.backgroundColor="green"   //giving css to elements or whatever

title1.style.borderRadus="15px"   //adding css

title1.textContent   //  gives only text which can be seen on the website

title1.innerText  //gives full text whether its hidden or text seen on the website

title1.innerHTML  //it will all the things inside the titel1 whether its html or any element or text etc


/************ We can use querSelector or querySelectorAll to select anythiing whether its by tag class or id with one only *************** */

document.querySelector('h1') //gives the element with h1 tag but only first one for all we have something called querySelectorAll('h1')

document.querySelector('#title')  //accesing by id just like we write in css files

document.querySelector(".heading") //accesing by claas just we write in css files

document.querySelector('input[type="password"]') //we can see according to attribute in big bracket

document.querySelector('p:first-child') //will give fist child



/*************we can save in variable also on that also we can use like********************* */
//suppose there is ul inside which three li are there
const myul = document.querySelector('ul')

const list = myul.querySelector('li') //it will save only li but only first inside myul

list.style.backgroundColor="green"   //applying to only first element


/******************************************Now use of querySelectorAll********************************** */

const tempLiList = document.querySelectorAll('li')  //it will takes this all the li on the page value comes in the form of nodelist

/* 
Nodelist comes like array but its not array it will not completely behave like array
NodeList and html collection both are not array so always check its property in console.log what properties are available like in this there forEach available there is no map available to use So we can't use map In array we get array
*/

//but somewhat similar to array not all

//always check datatype we are getting before applying
tempLiList.style.color="green"   //we can't do this because its returning value in the form nodeList even one element inside that we have to like below

tempLiList[0].style.color = "green"   //like array we are choosing first li out of in tempList

//now using forEach if we want to select multiple at a time

tempLiList.forEach(function(l){                 //it will turn all the elements green one by through iterations
  l.style.backgroundColor = 'green'
})

////////////////////////////////////////

const tempClassList = document.getElementsByClassName('list-item')  //it will give all the element with className list-item but in the form of nodeList but in the form of HTMLCollection now again its not array its not same as nodelist so always check property > proto to know method we can run on this type of data like here is no option of looping like was in nodelist or array

//to convert in array to use properties of array

const convertedToArray = Array.from(tempClassList)   //it will convert in array form html collection


///writing multiple line like

convertedToArray.forEach(function(h){   //we can do multiple things
  h.style.color = 'black';
  h.style.backgroundColor = 'green'
})

