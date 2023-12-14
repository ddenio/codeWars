// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) {
    array.sort(function(a,b){return b-a})
    let finalArr = [];
    for(let i = 0;i<n;i++){
        finalArr.push(array[i])
    }return finalArr.sort(function(a,b){return a-b})
  }

  console.log(largest(2,[2,5,6,1,8]))