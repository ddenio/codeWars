// Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

// It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

String.prototype.sixBitNumber = function() {
    if (!/^(0|[1-9]\d*)$/.test(this)) return false
    const num = Number(this)
    return num >= 0 && num <= 63
}

console.log("0".sixBitNumber())
console.log("63".sixBitNumber())
console.log("64".sixBitNumber())
console.log("01".sixBitNumber())
console.log("+5".sixBitNumber())
console.log(" 5".sixBitNumber())
console.log("5 ".sixBitNumber())