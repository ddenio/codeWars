// Task
// You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

// Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

// Still struggling to understand the task? Look at the following examples ;-)

// Examples
// For s = "73+42=16", the output should be true.

// 73 -> 37
// 42 -> 24
// 16 -> 61
// 37+24==61
// For s = "5+8=13", the output should be false.

// 5 -> 5
// 8 -> 8
// 13 -> 31
// 5+8!=31
// For s = "10+20=30", the output should be true.

// 10 -> 01 -> 1
// 20 -> 02 -> 2
// 30 -> 03 -> 3
// 1+2==3
// Note
// All the numbers a,b,c no more than 10 digits, excluding leading zeros(read backwards)

// s contains only digits, "+" and "=", "-","*" or "/" will not appear in the string.

function isTuringEquation(s){
    let primary = s.split('+')
    let first = Number(s.split('+')[0].split('').reverse().join(''))
    let second = Number(primary[1].split('=')[0].split('').reverse().join(''))
    let third = Number(s.split('=')[1].split('').reverse().join(''))
    return first+second === third ? true : false
  }

console.log(isTuringEquation("73+42=16"))
console.log(isTuringEquation("5+8=13"))