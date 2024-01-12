// You are given a 32-bit integer n. Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.

// The potential leading zeroes of the binary representations have to be taken into account, e.g. 0b100 as a 32-bit integer is 
// 0b00000000000000000000000000000100 and is reversed to 0b1000.

// Examples
// For n = 13, the output should be 14:

// 1310 = 11012 --> 11102 = 1410

// For n = 74, the output should be 133:

// 7410 = 010010102 --> 100001012 = 13310

// Input/Output
// [input] integer n
//  0 ≤ n < 2^30.

// [output] an integer


function swapAdjacentBits(n) {
    let binaryString = n.toString(2).padStart(32, '0');
    let swappedBinary = '';
    for (let i = 0; i < binaryString.length; i += 2) {
        swappedBinary += binaryString[i + 1] + binaryString[i];
    }
    let result = parseInt(swappedBinary, 2);
    return result;
}
console.log(swapAdjacentBits(74))