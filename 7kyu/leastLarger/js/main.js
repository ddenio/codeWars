// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

function leastLarger(a,index) {
    let target = a[index]
    let candidateIndex = -1
  
    for (let i = 0; i < a.length; i++) {
        if (a[i] > target) {
        if (candidateIndex === -1 || a[i] < a[candidateIndex]) {
            candidateIndex = i
            }
        }
    }
    return candidateIndex
}

console.log(leastLarger([4, 1, 3, 5, 6], 0))
console.log(leastLarger([4, 1, 3, 5, 6], 4))

