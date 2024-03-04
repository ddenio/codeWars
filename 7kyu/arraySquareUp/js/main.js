// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// 0 <= n <= 1000.

function squareUp(n){
    let finalArr = []
    let tempArr = []
    for(let i = n; i>=0;i--){
        for(let j=i; j>0;j--){
            tempArr.push(j)
        }if(tempArr[0]<n){
            for(let k= n-tempArr[0]; k>0;k--){
                tempArr.unshift(0)
            }
        }
        
        finalArr.unshift(tempArr)
        tempArr = []
    }return finalArr.flat()
}

console.log(squareUp(3))
console.log(squareUp(4))