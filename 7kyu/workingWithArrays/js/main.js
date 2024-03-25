// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, 
// but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// function withoutLast(arr) {
//     // Fix it
//     arr.pop(); // removes the last element
//     return arr;
//   }

function withoutLast(arr) {
    // Fix it
    let newArr = arr.slice(0,arr.length -1)
    return newArr
  }

console.log(withoutLast([ 15, 60, 78, 63, 8, 40, 92, 89, 87, 70, 88 ]))