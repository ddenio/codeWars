// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
  const r = (2*A) / Math.PI
  return Number((r*r).toFixed(2))
}

console.log(squareArea(2))
console.log(squareArea(0))
console.log(squareArea(14.05))