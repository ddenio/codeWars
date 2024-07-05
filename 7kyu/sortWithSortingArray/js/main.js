// Sort an array according to the indices in another array.
// It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

//     sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
//     sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

function sort(initialArray, sortingArray) {
    let sortedArr = new Array(initialArray.length);
    for (let i = 0; i < initialArray.length; i++) {
        sortedArr[sortingArray[i]] = initialArray[i];
    }
    return sortedArr;
}

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]))
console.log(sort(['x', 'y', 'z'], [1, 2, 0]))
console.log(sort(['z', 'x', 'y'], [0, 2, 1]))