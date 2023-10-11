// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

//my solution
function squareSum(numbers){
    let total = 0;
    if (numbers.length === 0){
        return 0
    }else {
        for (let i =0;i<numbers.length;i++){
            total+=numbers[i]*numbers[i]
        }
    }return total
}

console.log(squareSum([1,2,2]))

//top solution:

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }