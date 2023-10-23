
const textField = document.body.querySelector('#guessField')
const button = document.body.querySelector('#sub')
const guesses = document.body.querySelector('.guesses')
const remaining = document.body.querySelector('.guessRemaining')
const lowOrHigh = document.body.querySelector('.lowOrHigh')
const newGameDiv = document.body.querySelector('#newGame')
const endGameDiv = document.body.querySelector('#endGame')
const form = document.body.querySelector('form')


const p = document.createElement('p')



let value = Math.floor(Math.random()*100 + 1 );  //on the place of Math.floor we can use parseInt also
let prevGuesses = [];
// console.log(prevGuesses.length)


button.addEventListener('click', (e)=> {
    e.preventDefault();
   if (prevGuesses.length < 10){
    const inputValue = parseInt(textField.value)
    checkGuess(inputValue)
    prevGuess();
    guessRemaining();
    console.log("right")
   } else {
    difference("Try next time.")
    endGame()
    
    console.log("clicked else")
   }
})



function checkGuess(inputValue){
    if(isNaN(inputValue)){
        console.log(inputValue)
        alert("It is not a No")
    } else if (inputValue < 1){
        alert("Enter No from 1 to 100 ")
    } else if(inputValue > 100){
        alert("Enter No from 1 to 100 ")
    }else{
        prevGuesses.push(inputValue)
        validateGuess(inputValue);
    }
}

function validateGuess(inputValue){
    if(inputValue === value){
        difference("You Guessed it Right")
        endGame()
    } else if(inputValue < value){
        difference("No is Smaller")
    } else {
        difference("No is Bigger")
    }
}

function prevGuess(){
    guesses.innerHTML = prevGuesses;
}

function guessRemaining(){
    remaining.innerHTML= 10 - prevGuesses.length
}

function difference (message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
 guesses.innerHTML = ""  //done so that it clears all the field then  when in this new game is called it will again set to array 
 form.style.display = 'none';
 p.innerHTML= "<button id='newBtn'>Play Again</button>"
 newGameDiv.appendChild(p)
 newGameDiv.style.display="block"   //first time it will run but this code is necessary second time it will create problem if we don't write as in newgame it will set to display none in second run we have to show again to block in end game otherwise there will be no play again  button to click then only new game eveentlistener will be triggered 
 console.log("click endgame")
 newGame()
}


function newGame(){
    prevGuesses = []
    document.body.querySelector("#newBtn").addEventListener('click', (e)=>{
        newGameDiv.removeChild(p)
        form.style.display = 'block';
        newGameDiv.style.display="none";
        endGameDiv.style.display="none"
        console.log("click newgame")
       })
    
}




// console.log(value)