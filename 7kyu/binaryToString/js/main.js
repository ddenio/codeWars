// Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, 
// and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. 
// Remember, in Python binary output starts with '0b'.

// As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

// Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special symbols. 
// The input to your function will always be one string of binary.

function binaryToString(binary){
  // Split the input string into an array of binary sequences
  const binaryArray = binary.split('0b').filter(Boolean);

  // Convert each binary sequence to its decimal equivalent and then to ASCII
  const result = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2)));

  // Join the resulting array into a single string
  return result.join('');
}

//top codewars answer:

const binaryToString = binary => String.fromCharCode( ...binary.split( /(?=0b)/ ).map(Number) ) ;