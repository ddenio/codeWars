// DESCRIPTION:
// Recreation of Project Euler problem #6

// Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
// The sum of the squares of the numbers is:

// 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbers is: 3025 - 385 = 2640

function differenceOfSquares(n) {
   let arr = []
   for(let i = 0; i < n; i++){
     arr.push(i+1)
   }
   let rud1 = arr.reduce((total,curr) => total+curr)**2
   let rud2 = arr.reduce((total,curr) => total + curr**2)
   return rud1-rud2
  }

console.log(differenceOfSquares(10))
console.log(differenceOfSquares(5))