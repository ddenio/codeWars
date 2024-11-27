// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    let final = []
    for(let i = 1; i<array.length+1; i++){
        final.push(array[array.length-i])
    }return final
  }

console.log(reverse([0,2,5,6,7]))
console.log(reverse([1,null,14,"two"]))