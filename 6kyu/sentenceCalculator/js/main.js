// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

function lettersToNumbers(s) {
    const lib = {"a": 1, "b":2, "c":3,"d":4, "e":5,"f":6,"g":7,"h":8,"i":9,"j":10,"k":11,"l":12,"m":13,"n":14,"o":15,"p":16,"q":17,"r":18,"s":19,"t":20,
        "u":21,"v":22,"w":23,"x":24,"y":25,"z":26,"A": 2, "B":4, "C":6,"D":8, "E":10,"F":12,"G":14,"H":16,"I":18,"J":20,"K":22,"L":24,"M":26,"N":28,"O":30,"P":32,"Q":34,"R":36,"S":38,"T":40,
        "U":42,"V":44,"W":46,"X":48,"Y":50,"Z":52, "0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9
    }
    s = s.replace(/[^a-zA-Z0-9]/g, '').split('')
    return s.map(e => lib[e]).reduce((tot,curr) => tot+curr,0)
}

console.log(lettersToNumbers("I Love You"))
console.log(lettersToNumbers("ILoveYou"))
console.log(lettersToNumbers("oops, i did it again!"))