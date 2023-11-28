// Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata,
//  please do check it out first.

// You will create a function which takes an array of two positive integers, spoonerizes them,
//  and returns the positive difference between them as a single number or 0 if the numbers are equal:

// [123, 456] = 423 - 156 = 267
// Your code must test that all array items are numbers and return "invalid array" 
// if it finds that either item is not a number. The provided array will always contain 2 elements.

// When the inputs are valid, they will always be integers, no floats will be passed. However,
//  you must take into account that the numbers will be of varying magnitude, between and within test cases.

function noonerize(arr) {
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return 'invalid array';
    }
    const str1 = arr[0].toString();
    const str2 = arr[1].toString();
    const spoonerizedStr1 = str2.slice(0,1) + str1.slice(1);
    const spoonerizedStr2 = str1.slice(0, 1) + str2.slice(1);
    const difference = Math.abs(parseInt(spoonerizedStr1) - parseInt(spoonerizedStr2));
    return difference
}
console.log(noonerize([12,34]))
console.log(noonerize(['a',34]))