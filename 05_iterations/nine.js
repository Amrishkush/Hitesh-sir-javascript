const myNums = [1, 2, 3]

//syntax---  arr.reduce(function(accumlator, current value) , 0)
//reduce takes argument as a call function and initial value anything we can take here we took 0 as initial
//function inside take two parameters accumlator and current value
//firstly initial value is stored in accumlator and operation done changing the value of accumlator accord. to condition
//

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);