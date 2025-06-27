function countRuleTables(n) {
  const base = 1n + 4n * BigInt(n)
  const exponent = 2n * BigInt(n)
  return base ** exponent      
}

console.log(countRuleTables(1))
console.log(countRuleTables(2))