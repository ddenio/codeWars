// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(numList) {
    return numList.filter(ele => numList.indexOf(ele) === numList.lastIndexOf(ele)).reduce((total,curr) => total+curr,0)
  }

console.log(sumNoDuplicates([1,2,3,2,3,4]))