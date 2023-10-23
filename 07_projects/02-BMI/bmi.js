

const button = document.body.querySelector('.btn')
// console.log(button)
// console.log(height)

//if we write out of the addeventlistener 
         ///////////////  Never write outside otherwise it will capture empty value//////////////
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)
//Then value stored will be empty because at the time of loading whole page it was blank means text of height and weight
//but when we write inside it will only read value only when we click at time obviously it will be filled
button.addEventListener('click' , (e)=>{
    e.preventDefault(); //means stop for some don't submit in the form basically
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
            //or results.innerHTML = `<span>${bmi}</span>`  adding by adding inside span tag both are same
        }
})