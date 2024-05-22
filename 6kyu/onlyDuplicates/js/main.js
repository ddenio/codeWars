// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
    return str.split('').filter(x => str.indexOf(x) != str.lastIndexOf(x)).join('')
  }

console.log(onlyDuplicates('hello'))
console.log(onlyDuplicates('colloquial'))