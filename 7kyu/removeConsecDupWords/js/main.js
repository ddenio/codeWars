// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(str) {
     const words = str.split(' ')
     const result = []
     for (let i = 0; i < words.length; i++) {
         if (result.length === 0 || words[i] !== result[result.length - 1]) {
             result.push(words[i])
         }
     }
     return result.join(' ')
}