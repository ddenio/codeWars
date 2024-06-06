// No Story

// No Description

// Only by Thinking and Testing

// Look at the results of the testcases, and guess the code!

// describe('Basic tests', () => {
//     doTest("word", 1)
//     doTest("hello world", 1)
//     doTest("I love codewars.", 0)
//     doTest("My cat waiting for a dog.", 1)
//     doTest("We often read book, a word hidden in the book.", 2)
//     doTest("When you in order to do something by a wrong way, your heart will missed somewhere.", 2)
//     doTest("This sentence have one word.", 1)
//     doTest("This sentence have two word, not one word.", 2)
//     doTest("One word + one word = three word ;-)", 3)
//     doTest("Can you find more word for me?", 1)
//   })
// })

function testit(s) {
       // Define the target word
    const targetWord = 'word';
    
    // Initialize variables to keep track of counts and indices
    let count = 0;
    let index = 0;
    
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        // If the current character matches the next letter in the target word
        if (s[i].toLowerCase() === targetWord[index]) {
            index++; // Move to the next letter in the target word
            // If we've found all letters of the target word
            if (index === targetWord.length) {
                count++; // Increment the count
                index = 0; // Reset the index to start searching for the word again
            }
        }
    }
    
    return count;
}


//top answer:


// function testit(s) {
//     return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
//   }


console.log(testit('word'))
console.log(testit("wordlcp@*(w()ollr2334d"))
console.log(testit('rRrRWworrwoOroDWdroWdrDDwrWdorrOdwdOooOowRoOWdrwowWWRDdrwDrRWdrwwdooOd'))
console.log(testit('OdOwRRRddoOwrDrWWwrWoddRoOodrRdDrDDdwRoDordrOWDdRwodwrRdORowDRWWDwowRRwrWDDdrdorDWOOorroDRDDoWOwOd'))
console.log(testit('Fvw7cw0;vJOrOwDdR"WoOrgrWORD.D.KoWW<|}DD`\~w"DER_81h=w}rr=i_/`-ud:l6jroIowb-dBdRpuSDAOCFUdRd~BOr'))