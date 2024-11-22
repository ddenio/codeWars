// Since Fahrenheit never lived the world kept on using the Rømer scale, invented by fellow Dane Ole Rømer to this very day, skipping over the Fahrenheit and Celsius scales entirely.

// Your magnum opus contains several thousand references to temperature, but those temperatures are all currently in degrees Celsius. You don't want to convert everything by hand, so you've decided to write a function that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer. Fortunately, you remember that the function for converting is pretty simple and it looks like this:

// ∘
// R
// ø
// =
// 21
// 40
// ∘
//  Rø= 
// 40
// 21
// ​
  
// ∘
// C
// +
// 7.5
// ∘
//  C+7.5

// For example,

// 2
// 4
// ∘
// C
// ≈
// 20.
// 1
// ∘
// R
// ø
// 24 
// ∘
//  C≈20.1 
// ∘
//  Rø;

// 8
// ∘
// C
// ≈
// 11.
// 7
// ∘
// R
// ø
// 8 
// ∘
//  C≈11.7 
// ∘
//  Rø;

// 2
// 9
// ∘
// C
// ≈
// 22.72
// 5
// ∘
// R
// ø
// 29 
// ∘
//  C≈22.725 
// ∘
//  Rø



function celsiusToRomer(temp) {
    return 21/40 * temp + 7.5
  }

console.log(celsiusToRomer(24))
console.log(celsiusToRomer(8))
console.log(celsiusToRomer(29))