// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, 
// not the input!

function duplicateEncode(word){
      // Convert the input string to lowercase
  const lowercasedWord = word.toLowerCase();

  // Create an object to store the count of each character
  const charCount = {};

  // Iterate through each character and update the count
  for (const char of lowercasedWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again and build the result string
  const result = lowercasedWord
    .split('')
    .map(char => (charCount[char] > 1 ? ')' : '('))
    .join('');

  return result;
}

console.log(duplicateEncode('din'))