// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

function lengthOfSequence(arr, n) {
    return [...arr].filter(e => e === n).length < 2 ||  [...arr].filter(e => e === n).length > 2 ? 0 : arr.findLastIndex(e => e === n) - arr.findIndex(e => e === n) + 1
  };

console.log(lengthOfSequence([1,7,2,7,5,2,3,7,8,2,7,2,3,7,4],7))
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5))