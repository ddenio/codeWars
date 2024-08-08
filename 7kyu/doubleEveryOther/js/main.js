// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

function doubleEveryOther(a) {
    return a.map((e,index) => index % 2 !== 0 ? e*2 : e)
  }

console.log(doubleEveryOther([1,2,3,4]))