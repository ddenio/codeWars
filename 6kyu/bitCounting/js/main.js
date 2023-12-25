// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n){
    count = 0;
    bin = (n).toString(2);
    console.log(bin)
    for(let i = 0; i< bin.length;i++){
        if(bin[i]=== '1'){
            count++
        }
    }return count
}

console.log(countBits(1234))
console.log(countBits(9991081099))

//top codewars solution:

// countBits = n => n.toString(2).split('0').join('').length;

// console.log(countBits(1234))
// console.log(countBits(9991081099))