// Write a function take_umbrella() that takes two arguments: a string representing the current weather and a float representing the chance of rain today.

// Your function should return True or False based on the following criteria.

// You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
// You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.
// The options for the current weather are sunny, cloudy, and rainy.

// For example, take_umbrella('sunny', 0.40) should return False.

// As an additional challenge, consider solving this kata using only logical operaters and not using any if statements.

function takeUmbrella(weather, chance) {
    return weather === 'rainy' || weather === 'cloudy' && chance >0.20 || weather === 'sunny' && chance >0.50 ? true : false
  }

console.log(takeUmbrella('sunny', 0.4))
console.log(takeUmbrella('rainy', 0))
console.log(takeUmbrella('cloudy', 0.2))
console.log(takeUmbrella('sunny', 0.66))