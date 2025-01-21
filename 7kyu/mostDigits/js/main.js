// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
    return array.reduce((longest, current) => 
        current.toString().length > longest.toString().length ? current : longest
    )
}

console.log(findLongest([1,10,100]))
console.log(findLongest([9000,8,800]))
console.log(findLongest([8,900,500]))
