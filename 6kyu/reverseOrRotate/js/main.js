// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz 
// (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. 
// Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

function revrot(str, sz) {
    let substrings = []

    if(sz <= 0 || str === '' || str.split('').length < sz){
        return ''
    }else {
        for(let i = 0; i < str.length; i += sz){
            if(str.substring(i, i + sz).length < sz){
                
            }else{
                substrings.push(str.substring(i, i + sz))
            }
        }
    }
    console.log(substrings)
    for(let i = 0; i < substrings.length; i ++){
        if(substrings[i].split('').reduce((total,curr) => total+Number(curr),0) % 2 === 0){
            substrings[i] = substrings[i].split('').reverse().join('')
        }else{
            substrings[i]= substrings[i].slice(1)+substrings[i][0]
        }
    }
    
    return substrings.join('')
}

console.log(revrot('66443875', 4))
console.log(revrot('', 8))
console.log(revrot('1232141235', 0))
console.log(revrot('1232', 5))
console.log(revrot('733049910872815764', 5))