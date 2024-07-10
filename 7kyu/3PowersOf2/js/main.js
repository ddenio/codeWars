// Task
// Write a function three_powers() to accept a number, to check can it represent as sum of 3 powers of 2.(n == 2**i + 2**j + 2**k, i, j, k >= 0)

// For example:

// three_powers(2)  # False
// three_powers(3)  # True, 3 = 2**0 + 2**0 + 2**0
// three_powers(5)  # True, 5 = 2**0 + 2**1 + 2**1
// three_powers(15)  # False
// Input
// - `n` must be an integer.
// - `1` <= `n` <= `2 ** 100 - 1`
// There are 2000 random tests for the speed test, good luck and happy coding.

function threePowers(n) {
    const powers = [];
    for (let i = 0; Math.pow(2, i) <= n && i < 100; i++) {
        powers.push(Math.pow(2, i));
    }
    
    const len = powers.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            for (let k = j; k < len; k++) {
                if (powers[i] + powers[j] + powers[k] === n) {
                    return true;
                }
            }
        }
    }
    
    return false;
}

console.log(threePowers(2))
console.log(threePowers(3))
console.log(threePowers(5))
console.log(threePowers(15))