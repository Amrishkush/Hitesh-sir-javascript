

const button = document.body.querySelector('.btn')
// console.log(button)
// console.log(height)
button.addEventListener('click' , (e)=>{
    e.preventDefault();
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('.results')
    if(height < 0 || height === " " || isNaN(height)){
    results.innerHTML= "Please fill valid height"
    console.log(height)
    } else if(weight < 0 || weight === "" || isNaN(weight)){
        results.innerHTML= "Please fill valid weight"
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = bmi;
        }
})