// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    let final = n 
    while (n>1){
        final*=(n-1)
        n=n-1
    }

    return final === 0 ? 1 : final
}

console.log(factorial(0))
console.log(factorial(5))
console.log(factorial(7))