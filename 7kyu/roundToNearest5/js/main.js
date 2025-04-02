// Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

// For example, given the following array:

// [34.5, 56.2, 11, 13]
// should return

// [35, 55, 10, 15]

function roundToFive(arr){
    return arr.map(num => Math.round(num / 5) * 5)
}

console.log(roundToFive([34.5, 56.2, 11, 13]))
console.log(roundToFive([1,5,87,45,8,8]))
console.log(roundToFive([3,56.2,11,13]))