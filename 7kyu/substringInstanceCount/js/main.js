// Write a function that takes two string parameters search_text and full_text and returns the number of times the search_text is found within the full_text.

// Overlap is not permitted: "aaa" contains 1 instance of "aa", not 2.
// search_text will never be empty.
// Examples:
// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
// --> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
// --> should return 1


function solution(fullText, search) {
  return fullText.split(search).length - 1
}

console.log(solution("aa_bb_cc_dd_bb_e", "bb"))
console.log(solution("aaabbbccc", "bbb"))
console.log(solution("ccddeeccddeecc", "cc"))