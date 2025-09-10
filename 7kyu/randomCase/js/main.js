// Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
// Notes:

// This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

// The letters MUST be selected randomly - filters are set to make sure there is no cheating!

function randomCase(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    let char = x[i];
    if (/[a-zA-Z]/.test(char)) {
      if (Math.random() < 0.5) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    } else {
      result += char;
    }
  }
  return result;
}

console.log(
  randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
);
console.log(randomCase("Donec eleifend cursus lobortis"));
