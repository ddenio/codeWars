// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    if (!arr.every(e => typeof e === "number")){
        return undefined
    }
    return arr.map(e => e**3).filter(e => e % 2 !== 0).reduce((total,curr) => total+curr,0)
}


console.log(cubeOdd([1,2,3,4]))
console.log(cubeOdd([1,"a",3,4]))