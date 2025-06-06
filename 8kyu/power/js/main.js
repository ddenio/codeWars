// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
    const original = number
    for(let i = 1; i < power;i++){
        number*=original
    }
    return power===0 ? 1 : number
}

console.log(numberToPower(3,2))
console.log(numberToPower(2,3))
console.log(numberToPower(10,6))
console.log(numberToPower(10,0))