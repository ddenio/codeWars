// Background

// A geometric progression / series is the sum of a geometric sequence.

// A geometric sequence is a sequence of numbers that scale by a common ratio, usually denoted as r. To get the next term, multiply the current term by this value. The first term is provided for this kata.

// For example, the first 4 terms of the geometric sequence with first term 2 and ratio 3 is 2, 6, 18, 54. Notice that, given any term, it is 3 times larger than the last term for this case.

// A geometric series is just the first n terms of the sequence summed together. For instance, the sum of the first four terms of the example provided above is 
// 2
// +
// 6
// +
// 18
// +
// 54
// =
// 80
// 2+6+18+54=80.

// Kata Task

// Complete the function which will help you compute a geometric progression / series.

// The parameters provided are as follows:

// a is the first term
// r is the common ratio
// n is the amount of terms

function GeometricSequenceSum(a, r, n) {
  let sum = 0
  for(let i = 1; i<=n;i++){
    sum+=a
    a=a*r
  }return sum
}

console.log(GeometricSequenceSum(2,3,5))
console.log(GeometricSequenceSum(1,1,2))
console.log(GeometricSequenceSum(2,2,10))
console.log(GeometricSequenceSum(1,-2,10))