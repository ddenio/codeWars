// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. 
// The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. 
// Ignoring the order of the parts, there is only one valid solution for each input to your function!

function splitInteger(num,parts){
    //finding lowest quotient of the num/parts
    let quotient = Math.floor(num/parts);
    //finding what number is left over that we need to distribute into our parts
    let remainder = num % parts;
    let solution = [];
    for(let i = 0; i<parts;i++){
        if (remainder > 0){
            solution.push(quotient+1);
            remainder--;
        }else {
            solution.push(quotient)
        }
    }return solution
}

console.log(splitInteger(20,6));
console.log(splitInteger(10,1));