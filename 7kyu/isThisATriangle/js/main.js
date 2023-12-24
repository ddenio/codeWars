// Implement a function that accepts 3 integer values a, b, c. The function should return true 
// if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort(function (d, e) {
      return d - e;
    });
    if(numbers[2] < numbers[0]+numbers[1]){
        return true
    }return false
  }
  
  // Example usage:
console.log(isTriangle(3, 11, 2));