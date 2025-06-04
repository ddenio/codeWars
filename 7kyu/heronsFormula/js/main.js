// Write function heron which calculates the area of a triangle with sides a, b, and c.

// Heron's formula:

// s
// ∗
// (
// s
// −
// a
// )
// ∗
// (
// s
// −
// b
// )
// ∗
// (
// s
// −
// c
// )
// s∗(s−a)∗(s−b)∗(s−c)
// ​
 
// where: 
// s
// =
// a
// +
// b
// +
// c
// 2
// s= 
// 2
// a+b+c
// ​


function heron(a, b, c) {
    let s = (a+b+c)/2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

console.log(heron(3,4,5))
console.log(heron(4,4,4))