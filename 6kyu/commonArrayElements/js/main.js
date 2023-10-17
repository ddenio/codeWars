// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
// More examples in the test cases.

// Good luck!

function common(a,b,c){
    // Create sets for each array to store unique elements
  const set1 = new Set(a);
  const set2 = new Set(b);
  const set3 = new Set(c);

  // Initialize a result variable to store the sum of common elements
  let sum = 0;

  // Iterate through the first set (arr1) and check if elements are in the other sets
  for (const num of set1) {
    if (set2.has(num) && set3.has(num)) {
      // If the element is present in all sets, add it to the sum
      sum += num;
    }
  }

  return sum;

   }

console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]))

//top codewars solution:


// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }