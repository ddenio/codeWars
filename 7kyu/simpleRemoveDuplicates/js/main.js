// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// function solve(arr) {
//     const seen = {}; // An object to store the elements seen so far in the array
//     const result = [];
  
//     for (let i = arr.length - 1; i >= 0; i--) {
//       const currentElement = arr[i];
  
//       // Check if the current element has been seen before
//       if (!seen[currentElement]) {
//         seen[currentElement] = true; // Mark the element as seen
//         result.unshift(currentElement); // Add it to the beginning of the result array
//       }
//     }
  
//     return result;
//   }
  
//   const input = [3, 4, 4, 3, 6, 3];
//   const output = solve(input);

function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}

console.log(solve([3,4,4,3,6,3]))
