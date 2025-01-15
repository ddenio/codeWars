// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

function mutateMyStrings(stringOne, stringTwo){
    let finalStr = stringOne+"\n"
    for(let i = 0; i<stringOne.length; i++){
        const newStr = stringTwo.slice(0, i + 1) + stringOne.slice(i + 1)
        const lastLine = finalStr.split("\n")[finalStr.split("\n").length - 2]
        if (newStr !== lastLine) {
            finalStr += newStr + "\n";
        }
    }return finalStr
}

console.log(mutateMyStrings("bubble gum", "turtle ham"))