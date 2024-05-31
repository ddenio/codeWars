// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

// The booleans should always start with false becase there is no digit before the first one.

// Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]
// *** Remember 0 is evenly divisible by all integers but not the other way around ***

function divisibleByLast(n) {
    let final = [false]
    n = n.toString().split('')
    for(let i = 0; i<n.length-1;i++){
        if(n[i+1]%n[i] ===0){
            final.push(true)
        }else{
            final.push(false)
        }
    }return final
  }

console.log(divisibleByLast(73312))
console.log(divisibleByLast(2026))