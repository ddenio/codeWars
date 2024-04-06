// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(n) {
    let finalArr = []
    for(let i = 1;i<=n;i++){
        if(i===1){
            finalArr.push('*')
        }else{
            finalArr.push('*'.repeat(i+(i-1)))
            for(let j=1;j<i;j++){
                finalArr[j-1]= " " + finalArr[j-1] + " "
            }
        
        }
    }return finalArr
  }

console.log(towerBuilder(3))