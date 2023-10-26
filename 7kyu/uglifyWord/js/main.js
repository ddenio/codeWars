// There is a flag and it will be started from 1.
// Check the current char in the iteration index.
// If it is an alphabet character [a-zA-Z] and the flag value is equal to 1, then change this character to upper case.
// If it is an alphabet character [a-zA-Z] and the flag value is equal to 0, then change this character to lower case.
// Otherwise, if it is not an alphabet character, then set the flag value to 1.
// If the current char is an alphabet character, do a boolean not operation to the flag.
// After the iteration has done, return the fixed string that might have been changed in such iteration.

// Examples
// uglify_word("aaa") === "AaA"
// uglify_word("AAA") === "AaA"
// uglify_word("BbB") === "BbB"
// uglify_word("aaa-bbb-ccc") === "AaA-BbB-CcC"
// uglify_word("AaA-BbB-CcC") === "AaA-BbB-CcC"
// uglify_word("eeee-ffff-gggg") === "EeEe-FfFf-GgGg"
// uglify_word("EeEe-FfFf-GgGg") === "EeEe-FfFf-GgGg"
// uglify_word("qwe123asdf456zxc") === "QwE123AsDf456ZxC"
// uglify_word("Hello World") === "HeLlO WoRlD"

function uglifyWord(s) {
    let flag = 1;
    let regex = /[A-Za-z]/;
    let endString = ""
    for(let i = 0; i<s.length;i++){
        if(regex.test(s[i]) && flag === 1){
            endString+= s[i].toUpperCase();
            console.log(s[i]);
            flag = 0;
        }else if (regex.test(s[i]) && flag === 0) {
            endString+= s[i].toLowerCase();
            flag = 1;
        }else {
            flag = 1;
            endString+=s[i]
        }
    }return endString
  }
console.log(uglifyWord('snakes'));
console.log(uglifyWord('AAA'));
console.log(uglifyWord('aaa-bbb-ccc'))