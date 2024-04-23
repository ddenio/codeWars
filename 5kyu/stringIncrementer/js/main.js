// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    if(/\d/.test(strng) === false){
        strng+='1'
    }else{
        let num = strng.match(/(\d+)$/)[0]
        let num2 = (parseInt(num)+1).toString().padStart(num.length,'0')
        return strng.replace(/(\d+)$/,num2)  
    }
    return strng
  }

console.log(incrementString('ab001'))
console.log(incrementString("fo99obar99"))