// The number 8989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289=81+92
// The next number in having this property is 135135:
// See this property again: 135=11+32+53135=11+32+53
// Task
// We need a function to collect these numbers, that may receive two integers �a, �b that defines the range [�,�][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples
// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [�,�][a,b] the function should output an empty list.
// 90, 100 --> []

function sumDigPow(a, b) {
    let result = []
    for(let i = a; i<=b; i++){
        if( i.toString().split('').map(Number).reduce((acc,current,index) => acc + Math.pow(current, index+1),0) === i){
            result.push(i)
        }
    }return result
  }

console.log(sumDigPow(1,10))
console.log(sumDigPow(10,100))
console.log(sumDigPow(50,150))