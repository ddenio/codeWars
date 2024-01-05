// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

function arrCheck(value){
    for(let i = 0; i<value.length;i++){
        if(Array.isArray(value[i]) === false){
            return false
        }
        
    }return true
}

console.log(arrCheck([]))
console.log(arrCheck([['string']]))
console.log(arrCheck([[],{}]))
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']))
