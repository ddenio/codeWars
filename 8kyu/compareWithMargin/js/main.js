// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// Please note the following:

// When a is close to b, return 0.
// For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as if it were zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

function closeCompare(a, b, margin){
    return margin >= Math.abs(a-b) || a===b ? 0 : a<b ? -1 : 1
  }
  

console.log(closeCompare(4,5))
console.log(closeCompare(5,5))
console.log(closeCompare(6,5))
console.log(closeCompare(2,5,3))