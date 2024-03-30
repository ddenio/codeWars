// You've purchased a ready-meal from the supermarket.

// The packaging says that you should microwave it for 4 minutes and 20 seconds, based on a 600W microwave.

// Oh no, your microwave is 800W! How long should you cook this for?!

// Input
// You'll be given 4 arguments:

// 1. needed power
// The power of the needed microwave.
// Example: "600W"

// 2. minutes
// The number of minutes shown on the package.
// Example: 4

// 3. seconds
// The number of seconds shown on the package.
// Example: 20

// 4. power
// The power of your microwave.
// Example: "800W"

function cookingTime(neededPower, minutes, seconds, power) {
    neededPower = Number(neededPower.replace(/[a-zA-Z]/g, ''))
    power = Number(power.replace(/[a-zA-Z]/g, ''))
    let finalMinutes = Math.floor((minutes+(seconds/60))*(neededPower/power))
    let finalSeconds = Math.ceil(((minutes+(seconds/60))*(neededPower/power) -finalMinutes)*60)
    if(finalSeconds === 60){
        finalMinutes++
        finalSeconds=0
    }
    return `${finalMinutes} minutes ${finalSeconds} seconds`
  }

//top codewars solution:

// function cookingTime(neededPower, minutes, seconds, power) {
//     var time = Math.ceil((60 * minutes + seconds) * parseInt(neededPower) / parseInt(power));
//     return `${Math.floor(time / 60)} minutes ${time % 60} seconds`;
//   }

console.log(cookingTime('600W',4,20,'800W'))
console.log(cookingTime('7500W',0,5,'600W'))
console.log(cookingTime('21W',64,88,'25W'))
console.log(cookingTime('7500W',0,5,'600W'))