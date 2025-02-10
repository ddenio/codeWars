// Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...

// Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.

// For example:

// "The quick brown fox jumps over the lazy dog"

// Should become:

// "THE qck brwn FOX jmps vr THE lzy DOG"

// For the purposes of this kata, mid-word punctuation counts towards the character limit of a word.

// e.g: "it's / I'm" should become: "t's / I'M"

function smallWordHelper(sentence){
    return sentence.split(' ').map(e => e.length <= 3 ? e.toUpperCase() : e.replace(/[aeiouAEIOU]/g, "")).join(' ')
  }

console.log(smallWordHelper("The quick brown fox jumps over the lazy dog"))
console.log(smallWordHelper("I'm just a small word from a small word family"))