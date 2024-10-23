// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    const frequencyMap = {};

    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    })

    console.log(frequencyMap)
    

    // Step 3: Determine the maximum frequency
  let maxFrequency = 0;
  for (let num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
    }
  }

    // Step 4: Collect all numbers with the maximum frequency
    const mostFrequentNumbers = [];
    for (let num in frequencyMap) {
      if (frequencyMap[num] === maxFrequency) {
        mostFrequentNumbers.push(Number(num));
      }
    }
  
    // Step 5: Return the largest number among the most frequent
    return Math.max(...mostFrequentNumbers);
  }

console.log(highestRank([12,10,8,12,7,6,4,10,10,12]))