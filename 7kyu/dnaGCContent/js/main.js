// The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

// In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that are either guanine or cytosine.

// Given a DNA sequence (a string) return the GC-content in percent, rounded up to 2 decimal digits for Python, not rounded in all other languages.

// For more information about GC-content you can take a look to wikipedia GC-content.

// For example: the GC-content of the following DNA sequence is 50%: "AAATTTCCCGGG".

// Note: You can take a look to my others bio-info kata here

function gcContent(dna) {
    if(!dna){
        return 0
    }
    let gcCount = 0
    for(let i = 0; i<dna.split('').length;i++){
        if(dna.split('')[i]=== "G" || dna.split('')[i]=== "C"){
            gcCount++
        }
    }return Number(((gcCount/dna.length)*100).toFixed(2))
}

console.log(gcContent("G"))
console.log(gcContent("A"))
console.log(gcContent("C"))
console.log(gcContent("AACCCGGGTTT"))