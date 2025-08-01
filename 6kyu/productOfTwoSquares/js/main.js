// Given a strictly positive integer n, the goal of this Kata is to find every possible pair of integers (a, b) whose product of their squares is equal to n:

// n
// =
// a
// ²
// ∗
// b
// ²
// n=a²∗b²
// Return a 2D array of these pairs.

// The order of elements within a pair does not matter: [2, 3] is considered the same as [3, 2].
// The order of the pairs within the array does not matter: [ [1, 2], [3, 4] ] is the same as [ [3, 4], [2, 1] ].
// The array should not contain duplicate pairs. [2, 1] is a duplicate of [1, 2].
// If there are no pairs that satisfy the equation, return an empty array [].
// Examples
// 256 --> [ [1, 16], [2, 8], [4, 4] ] (or [ [4, 4], [16, 1], [2, 8] ] , or [ [1, 16], [8, 2], [4, 4] ]... etc.)
// 2 --> []
// 1 --> [ [1, 1] ]
// 81 --> [ [1, 9], [3, 3] ]

function squareProduct(n) {
    const root = Math.sqrt(n)
    if (!Number.isInteger(root)) return []

    const res = [];
    for (let i = 1; i <= Math.sqrt(root); i++) {
        if (root % i === 0) {
            const a = root / i
            res.push([i, a])
        }
    }
    return res
}

console.log(squareProduct(256))
console.log(squareProduct(81))
console.log(squareProduct(1))