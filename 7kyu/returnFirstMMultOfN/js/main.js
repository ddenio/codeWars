// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]

function multiples(m, n) {
    let final = []
    for (let i = 1; i <= m; i++) {
        final.push(n * i)
    }
    return final
}

console.log(multiples(3,5.0))
console.log(multiples(22,4))