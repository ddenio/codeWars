// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal

unction compare(s1, s2) {
    if (s1 === null || s1 === 'null' || s1 === 'NULL' || s1 === 'Nil' || s1 === 'None' || s1 === "") {
        s1 = "";
    } else {
        s1 = s1.toUpperCase();
    }

    if (s2 === null || s2 === 'null' || s2 === 'NULL' || s2 === 'Nil' || s2 === 'None' || s2 === "") {
        s2 = "";
    } else {
        s2 = s2.toUpperCase();
    }

    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < s1.length; i++) {
        if (/^[a-zA-Z]$/.test(s1[i])) {
            let c1 = s1.charCodeAt(i);
            count1 += c1;
        } else {
            s1 = "";
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (/^[a-zA-Z]$/.test(s2[i])) {
            let c2 = s2.charCodeAt(i);
            count2 += c2;
        } else {
            s2 = "";
        }
    }

    return s1 === s2 || count1 === count2;
}

console.log(compare('',''))