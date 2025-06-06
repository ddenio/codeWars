// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

function getIssuer(number) {
    // console.log(number.toString().length)
  if(number.toString()[0] === '4' && number.toString().length===13 || number.toString()[0] === '4' && number.toString().length===16){
    return "VISA"
  }else if (number.toString()[0] === '3' && number.toString()[1] === '4' && number.toString().length === 15 || number.toString()[0] === '3' && number.toString()[1] === '7' && number.toString().length === 15){
    return "AMEX"
  }else if (number.toString()[0] === '6' && number.toString()[1] === '0' && number.toString()[2] === '1' && number.toString()[3] === '1' && number.toString().length === 16){
    return "Discover"
  }
  else if (number.toString()[0] === '5' && number.toString()[1] === '1' && number.toString().length === 16 || number.toString()[0] === '5' && number.toString()[1] === '2' && number.toString().length === 16 || 
            number.toString()[0] === '5' && number.toString()[1] === '3' && number.toString().length === 16 || number.toString()[0] === '5' && number.toString()[1] === '4' && number.toString().length === 16
            || number.toString()[0] === '5' && number.toString()[1] === '5' && number.toString().length === 16){
    return "Mastercard"
  }
  else {
    return "Unknown"
  }
}

console.log(getIssuer(4111111111111111))
console.log(getIssuer(370000000000000))
console.log(getIssuer(6011000000000000))
console.log(getIssuer(5663000000000000))
console.log(getIssuer(5211000000000000))