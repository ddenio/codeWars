// Translate number to the selected number system. If the number consists just of digits - return number, else - return string.

//   SysNums(5,2) // 101
//   SysNums(5,8) // 5
//   SysNums(250,2) // 11111010
//   SysNums(250,16) // "fa"
// #####Hint: System can be 2, 8, 10, 16.

function sysNums(n, sys) {
  let converted = n.toString(sys)
  return /^[0-9]+$/.test(converted) ? Number(converted) : converted
}

console.log(sysNums(5, 2))
console.log(sysNums(5, 8))
console.log(sysNums(250, 2))