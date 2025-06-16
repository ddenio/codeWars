// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ]

// returns --> 30 // 1 + 5 + 9 + 3 + 5 + 7

function sum(matrix) {
    let finalSum = 0
    for(let i = 0; i < matrix.length;i++){
        finalSum+=matrix[i][i]+matrix[i][matrix.length-i-1]
    }
    return finalSum
}

console.log(sum([[1,2,3], [4,5,6], [7,8,9]]))
console.log(sum([[-2,5,3,2],[9,-6,5,1],[3,2,7,3],[-1,8,-4,8]]))