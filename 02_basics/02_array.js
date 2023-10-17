const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //push will not merge see below

// console.log(marvel_heros); //this will not merge but it will create array in marvel heros like this
// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) 
//concat returns new array we need to save in variable to access it ["thor", "Ironman", "spiderman", "superman", "flash", "batman"] above .push basically changed in same array
// console.log(allHeros);


//above work here various can be used easily spread operator same result as above
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//it will basically spread all the array inside array inside array
//depth we can give infinity means all the array will be opened
//givin like 2 will open up to depth of 2ss
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false wheter its array
console.log(Array.from("Hitesh"))   //will conver too array of letters of hitesh
console.log(Array.from({name: "hitesh"})) // interesting //it will give empty array
//bcoz it cannot understand for what array we give key or property we have to mention kiska banana hai 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //it converts all in the form of array