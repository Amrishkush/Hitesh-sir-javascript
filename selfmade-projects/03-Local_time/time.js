
const clock = document.body.querySelector('.clock')
console.log(clock)

setInterval(() =>{
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();   //always use () because it is method

}, 1000)