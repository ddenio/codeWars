// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr) {
    const sumArr = arr.reduce((sum, num) => sum + num, 0);
    const sumMixArr = mixArr.reduce((sum, num) => sum + num, 0);
    return sumArr === sumMixArr ? 0 : sumArr - sumMixArr;
}

console.log(findDeletedNumber([1,2,3,4,5],[3,4,1,5]))
console.log(findDeletedNumber([1,2,3,4,5],[3,4,1,5,2]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))
console.log(findDeletedNumber([1],[]))