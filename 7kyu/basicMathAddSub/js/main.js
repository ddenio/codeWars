// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
    const expression = str.replace(/plus/g, '+').replace(/minus/g, '-')
    return eval(expression).toString()
}

console.log(calculate("1plus2plus3plus4"))
console.log(calculate("1plus2plus3minus4"))