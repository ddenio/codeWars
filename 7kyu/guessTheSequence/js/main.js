// Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

// The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

// What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:

// 10 - 99.99... ---> Round to number divisible by 5

// 100 - 999.99... ---> Round to number divisible by 50

// 1000 - 9999.99... ---> Round to number divisible by 500

// And so on...

// Good luck!

// Examples
//  1  -->    2
//  7  -->    9
// 12  -->   15
// 86  -->  100

function gracefulTipping(bill) {
  let total = bill * 1.15
  if (total < 10) {
    return Math.ceil(total)
  }
  let divisor
  if (total >= 10 && total < 100) {
    divisor = 5
  } else if (total >= 100 && total < 1000) {
    divisor = 50
  } else if (total >= 1000 && total < 10000) {
    divisor = 500
  } else if (total >= 10000 && total < 100000) {
    divisor = 5000
  } else if (total >= 100000 && total < 1000000) {
    divisor = 50000
  } else {
    divisor = 500000
  }
  return Math.ceil(total / divisor) * divisor
}