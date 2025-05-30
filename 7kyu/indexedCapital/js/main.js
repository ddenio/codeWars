// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

function capitalize(s,arr){
  s = s.split('')
  for(let i=0; i < arr.length; i++){
    if(s[arr[i]]){
        s.splice(arr[i], 1, s[arr[i]].toUpperCase())
    }
  }return s.join('')
}

console.log(capitalize("abcdef",[1,2,5]))
console.log(capitalize("abcdef",[1,2,5,100]))