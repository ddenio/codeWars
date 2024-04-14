// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]

function add(arr) {
    let final = [];
    let arrC = arr[0]
    for (let i = 0;i<arr.length;i++){
        final.push(arrC)
        arrC+=arr[i+1]
    }return final
  }

console.log(add([1,2,3,4,5]))