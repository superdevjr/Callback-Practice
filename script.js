//first way -----------------

// let pizza

// function orderPizza() {
//     console.log("Order Pizza")
//     setTimeout(() => {
//         pizza = "a pizza emoji";
//         console.log('pizza is ready')

//     }, 2000);
//     console.log(`${pizza} was ordered`)
// }


// orderPizza()
// console.log("call my bro")
// console.log(`eat ${pizza}`)


// second way ------------

function orderPizza(cb) {
    setTimeout(() => {
        const pizza = `aTastyPizza`
        cb(pizza)
    }, 2000)

}

function pizzaReady(pizza) {
    console.log(`eat the ${pizza}`)
}

orderPizza(pizzaReady)

console.log('Call qoli')