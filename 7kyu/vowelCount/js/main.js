// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
   let count = 0;
   let lower = str.toLowerCase();
   let split = lower.split('');
   for(let i = 0; i<split.length;i++){
    if (split[i] === 'a' || split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u') {
        count++
    }
   }return count 
  }

getCount("TacoBell")