// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let finalarr = []
    n=n.toString()
    for(let i = 0; i < n.length; i++){
        finalarr.push(Number(n[i]))
    }return finalarr.reverse()
  }

console.log(digitize(35231))