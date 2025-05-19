
// Your friend has a list of k numbers: [a1, a2, a3, ... ak].

// He is allowed to do an operation which consists of three steps:

// select two numbers: ai and aj (ai % 2 = 0)
// replace ai with ai / 2
// replace aj with aj * 2
// Help him to find the maximum sum of list elements that is possible to achieve by using this operation (possibly multiple times).
// Return this sum modulo 1_000_000_007, because it can be quite big.

// Input
// List of k elements: [a1, a2, a3, ..., ak]; k < 10**4
// All numbers are positive and smaller than 10**9

// Output
// Maximum sum after some operations (modulo 1_000_000_007)

function divideAndMultiply(bigints) {
  const MOD = 1_000_000_007n

  let totalTwos = 0n
  let reduced = []

  for (let num of bigints) {
    num = BigInt(num)
    let count = 0n
    while (num % 2n === 0n) {
      num /= 2n
      count++
    }
    totalTwos += count
    reduced.push(num)
  }

  reduced.sort((a, b) => (a > b ? -1 : 1))
  let max = reduced[0]
  let restSum = reduced.slice(1).reduce((a, b) => a + b, 0n)

  let bigMax = max * (2n ** totalTwos)
  let total = bigMax + restSum

  return total % MOD
}