// Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

// "1 skip 2 skip 5 skip 13 skip 34"

// Return the result as a string

// You can presume that n is always a positive integer between (and including) 1 and 64.

function skiponacci(n) {
    const fib = [1, 1]
    while (fib.length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }
    return fib.slice(0, n).map((num, i) => i % 2 === 1 ? 'skip' : num).join(' ')
}

console.log(skiponacci(7))