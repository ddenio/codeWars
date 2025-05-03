// In this Kata you must convert integers numbers from and to a negative-base binary system.

// Negative-base systems can accommodate all the same numbers as standard place-value systems, but both positive and negative numbers are represented without the use of a minus sign (or, in computer representation, a sign bit); this advantage is countered by an increased complexity of arithmetic operations.

// To help understand, the first eight digits (in decimal) of the Base(-2) system is:

// [1, -2, 4, -8, 16, -32, 64, -128]

// Example conversions:

// Decimal, negabinary

// 6,   '11010'
// -6,  '1110'
// 4,   '100'
// 18,  '10110'
// -11, '110101'

function intToNegabinary(n) {
    if (n === 0) return '0';
  
    let result = '';
    while (n !== 0) {
      let remainder = n & 1;
      result = remainder + result;
      n = (n - remainder) / -2;
    }
  
    return result;
  }
  
  function negabinaryToInt(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      let bit = parseInt(str[str.length - 1 - i], 10);
      result += bit * ((-2) ** i);
    }
    return result;
  }
console.log(intToNegabinary(6))
console.log(intToNegabinary(-6))
console.log(negabinaryToint("11010"))
console.log(negabinaryToint("1110"))