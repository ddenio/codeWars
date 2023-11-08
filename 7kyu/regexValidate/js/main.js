// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    let regex4Digit = /^\d{4}$/;
    let regex6Digit = /^\d{6}$/;
    if (regex4Digit.test(pin) || regex6Digit.test(pin)) {
        return true;
      } else {
        return false;
      }

  }
console.log(validatePIN(1007))
console.log(validatePIN(10003))
//Top Codewars solution:

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }