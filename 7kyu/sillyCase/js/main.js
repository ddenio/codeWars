// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
// //         --^-- midpoint  
// //         bri    first half (lower-cased)  
// //            AN second half (upper-cased)  

function sillycase(silly) {
  return silly.slice(0,Math.ceil(silly.length/2)).toLowerCase() + silly.slice(Math.ceil(silly.length/2)).toUpperCase()
}

console.log(sillycase("brian"))
console.log(sillycase("codewars"))
console.log(sillycase("foobar"))