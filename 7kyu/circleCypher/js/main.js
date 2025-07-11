// Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

// Then add the letters in a clockwise direction:Then remove the circle:
// If we read the result from left to right, we get csordaew.

// Decoding is the same process in reverse. If we decode csordaew, we get codewars.

// Examples:
// encode "codewars" -> "csordaew"
// decode "csordaew" -> "codewars"
// encode "white" -> "wehti"
// decode "wehti" -> "white"

function encode(s) {
  const res = new Array(s.length)
  let positions = []
  let left = 0, right = s.length - 1

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) positions.push(left++)
    else positions.push(right--)
  }

  for (let i = 0; i < s.length; i++) {
    res[i] = s[positions[i]]
  }

  return res.join('')
}

function decode(s) {
    const positions = []
    let left = 0
    let right = s.length - 1
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            positions.push(left++)
        } else {
            positions.push(right--)
        }
    }
    const res = new Array(s.length)
    for (let i = 0; i < s.length; i++) {
        res[positions[i]] = s[i]
    }
    return res.join('')
}

console.log(encode("codewars"))
console.log(encode("white"))
console.log(decode("csordaew"))
console.log(decode("wehti"))