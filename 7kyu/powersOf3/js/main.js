// Given a positive integer N, return the largest integer k such that 3^k < N.

// For example,

// 3 --> 0
// 4 --> 1
// You may assume that the input to your function is always a positive integer.

function largestPower(n){
    if (n<=1) return -1
    let k = 0
    while (Math.pow(3, k+1) < n){
        k++
    }
    return k
}

console.log(largestPower(3))
console.log(largestPower(4))
console.log(largestPower(28))