// Write a function that takes an array / list of numbers and returns a number.

// See the examples and try to guess the pattern:

// (1, 2, 6, 1, 6, 3, 1, 9, 6) => 393
// (1, 2, 3)                   =>   5
// (0, 2, 3)                   =>   3
// (1, 0, 3)                   =>   3
// (3, 2)                      =>   6

function EvenOdd(arr) {
    if (arr.length === 0) return 0
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 1) {
            result *= arr[i]
        } else {
            result += arr[i]
        }
    }
    return result
}

console.log(EvenOdd([1,2,6,1,6,3,1,9,6]))
console.log(EvenOdd([1,2,3]))
console.log(EvenOdd([3,2]))