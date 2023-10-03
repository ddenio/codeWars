//Find Average of array

function avgArray(array){
    if (array.length === 0){
        return 0
    }
    var total = 0;
    for (let i =0; i <array.length; i++){
        total+=array[i];
    }
    return total/array.length
}

console.log(avgArray([1,4,6]));
console.log(avgArray([1,4,7]));
console.log(avgArray([1,4,7,20,24,97]));