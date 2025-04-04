// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
    return str.replace(/7(?=9)9(?=7)/g, '7')
}

console.log(sevenAte9("79712312"))
console.log(sevenAte9("79797"))