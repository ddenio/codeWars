// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example: 
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''

function solve(s, k) {
    let arr = s.split('')
    for (let charCode = 97; charCode <= 122 && k > 0; charCode++) { 
        let letter = String.fromCharCode(charCode)
        for (let i = 0; i < arr.length && k > 0; i++) {
            if (arr[i] === letter) {
                arr.splice(i, 1)
                k--
                i--
            }
        }
    }
    return arr.join('')
}

console.log(solve('abracadabra', 2))
console.log(solve('abracadabra', 6))
console.log(solve('abracadabra',50))