// Given a non-negative integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

// Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)

// Examples
// Integer 246  ==>  Should return 4

// original: 2   4   6
//            \ / \ /
// 1st iter:   3   5
//              \ /
// 2nd iter:     4


// Integer 89  ==>  Should return 9

// original: 8   9
//            \ /
// 1st iter:   9

function digitsAverage(input) {
    let digits  = input.toString().split('').map(e => Number(e))
    
    while(digits.length > 1){
        let nextDigits = []
        for(let i = 0;i<digits.length-1;i++){
            let avg = Math.ceil((digits[i] + digits[i+1]) / 2)
            nextDigits.push(avg)
        }
        digits = nextDigits
    }return digits[0]
}

console.log(digitsAverage(246))
console.log(digitsAverage(89))
console.log(digitsAverage(2))
console.log(digitsAverage(345))
