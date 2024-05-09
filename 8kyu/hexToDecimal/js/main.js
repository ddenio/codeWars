// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
    return parseInt(hexString,16)
  }

console.log(hexToDec("1"))
console.log(hexToDec("a"))
console.log(hexToDec("FF"))
console.log(hexToDec("-C"))