// An element in an array is dominant if it is greater than all elements to its right. 
// You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

function solve(arr) {
    const dominantElements = [];
    let max = arr[arr.length - 1]; // Initialize the maximum as the last element
  
    // Iterate through the array from right to left
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > max) {
        dominantElements.unshift(arr[i]); // Add the dominant element to the beginning of the list
        max = arr[i]; // Update the maximum
      }
    }
  
    dominantElements.push(arr[arr.length - 1]); // Add the last element as it's always included
  
    return dominantElements;

}

console.log(solve([1,21,4,7,5]))
console.log(solve([16,17,14,3,14,5,2]))