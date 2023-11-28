// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

function numbersWithDigitInside(x, d) {
    let tempArr = [];
    let calcArr = [];
    for(let i = 0;i<=x;i++){
        tempArr.push(i)
    }
    
    for(let i = 1;i<tempArr.length;i++){
        if(tempArr[i].toString().includes(d.toString())){
            calcArr.push(tempArr[i])
        }  
    }console.log(calcArr)
    if(calcArr.length===0){
        return [0, 0, 0]
    }return [calcArr.length, calcArr.reduce((total,num) =>total+num,0), calcArr.reduce((total,num) =>total*num,1)]
}

console.log(numbersWithDigitInside(1,0))