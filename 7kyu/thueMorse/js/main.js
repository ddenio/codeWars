// Task
// Given a sequence of 0s and 1s, determine if it is a prefix of Thue-Morse sequence.

// The infinite Thue-Morse sequence is obtained by first taking a sequence containing a single 0 
// and then repeatedly concatenating the current sequence with its binary complement.

// A binary complement of a sequence X is a sequence Y of the same length such that the sum of elements X_i and Y_i on the same positions is equal to 1 for each i.

// Thus the first few iterations to obtain Thue-Morse sequence are:

// 0
// 0 1
// 0 1 1 0
// 0 1 1 0 1 0 0 1
// ...
// Examples
// For seq=[0, 1, 1, 0, 1], the result should be true.

// For seq=[0, 1, 0, 0], the result should be false.

// Inputs & Output
// [input] integer array seq
// An non-empty array.

// Constraints:

// 1 <= seq.length <= 1000

// seq[i] ∈ [0,1]

// [output] a boolean value
// true if it is a prefix of Thue-Morse sequence. false otherwise.

function isThueMorsePrefix(seq) {
    // Initialize the Thue-Morse sequence with the first element (0).
    let thueMorse = [0];
    
    // Keep generating the Thue-Morse sequence until it's longer than the input sequence.
    while (thueMorse.length < seq.length) {
      // Generate the binary complement of the current sequence.
      const complement = thueMorse.map(bit => 1 - bit);
      
      // Concatenate the original sequence and its complement.
      thueMorse = thueMorse.concat(complement);
    }
    
    // Compare the input sequence with the generated Thue-Morse sequence.
    for (let i = 0; i < seq.length; i++) {
      if (seq[i] !== thueMorse[i]) {
        return false; // If there's a mismatch, it's not a prefix.
      }
    }
    
    return true; // If there's no mismatch, it's a prefix.
  }