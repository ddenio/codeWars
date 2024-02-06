// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){
    return arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val)).reduce((curr,total) => curr+total,0);
};

console.log(repeats([3,4,4,3,6,3,1,7]))