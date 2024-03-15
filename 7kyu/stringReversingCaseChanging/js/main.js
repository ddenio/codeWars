// Given 2 string parameters, show a concatenation of:

// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 

function reverseAndMirror(s1,s2) {
    return s2.split('').reverse().map((e) => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('') + '@@@' +
        s1.split('').reverse('').map((e) => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('') + 
        s1.split('').map((e) => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');
   
  }

console.log(reverseAndMirror('BlAcK', 'wAter'))
console.log(reverseAndMirror('FizZ', 'buZZ'))