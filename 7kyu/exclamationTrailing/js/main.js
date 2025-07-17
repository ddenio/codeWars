// Task
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

// Examples
// "Hi!" --> "Hi"
// "Hi!!!" --> "Hi"
// "!Hi" --> "!Hi"
// "!Hi!" --> "!Hi"
// "Hi! Hi!" --> "Hi Hi"
// "!!!Hi !!hi!!! !hi" --> "!!!Hi !!hi !hi"

function remove(string) {
  return string.split(' ').map(e => e.replace(/!+$/, '')).join(' ')
}

console.log(remove("!!!Hi !!hi!!! !hi"))