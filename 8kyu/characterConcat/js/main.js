// // Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", 
// // then the second letter from the left and the second letter to the right and "2", and so on.

// // If the string's length is odd drop the central element.

// // For example:

// // charConcat("abcdef")    == 'af1be2cd3'
// // charConcat("abc!def")   == 'af1be2cd3' // same result

// function charConcat(string) {
//     string = string.toString();
//     let newStr = string.split('');
//     let finishStr = "";
//     if (string.length % 2 !== 0) {
//         let index = (string.length - 1) / 2;
//         newStr.splice(index, 1);
//         let newStrLength = newStr.length;
//         let arrSplice = [];
//         let startStr = "";
//         let count = 1;
//         for (let i = 0; i < newStrLength / 2; i++) {
//             arrSplice.push(newStr.splice(0,1));
//             let index = newStr.length - 1;
//             arrSplice.push(newStr.splice(index, 1));
//             startStr = arrSplice.join('') + count;
//             finishStr += startStr;
//             count++;
//             arrSplice = [];
//         };
//     } else {
//         let newStrLength = newStr.length;
//         let arrSplice = [];
//         let startStr = "";
//         let count = 1;
//         for (let i = 0; i < newStrLength / 2; i++) {
//             arrSplice.push(newStr.splice(0,1));
//             let index = newStr.length - 1;
//             arrSplice.push(newStr.splice(index, 1));
//             startStr = arrSplice.join('') + count;
//             finishStr += startStr;
//             count++;
//             arrSplice = [];
//         };
//     } return finishStr
// };

// ///easy way:

function charConcat(str) {
    str = str.toString();
    let count = 1;
    let finalStr = '';
    while (str.length > 1) {
        finalStr += str.charAt(0) + str.charAt(str.length - 1) + count;
        count++;
        str = str.slice(1, str.length - 1)
    }
    return finalStr;
}

console.log(charConcat('tacobells'));

// str = 'tacobell';
// str = str.slice(1,str.length-1)
// console.log(str)