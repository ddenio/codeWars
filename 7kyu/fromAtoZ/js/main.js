// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"

function gimmeTheLetters(sp) {
    let finalStr = ""
    for (let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) {
        finalStr += String.fromCharCode(i)
    }
    return finalStr
}

console.log(gimmeTheLetters('s-v'))
console.log(gimmeTheLetters('a-z'))
console.log(gimmeTheLetters('Q-Z'))
console.log(gimmeTheLetters('J-J'))