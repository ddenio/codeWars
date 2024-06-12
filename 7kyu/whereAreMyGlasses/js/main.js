// Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

// Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with at least one dash in between!

// This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
// Search thoroughly, you might find my glasses in places such as 'dustO-Odust'
// Examples
// ["phone", "O-O", "coins", "keys"] ➞ 1

// ["OO", "wallet", "O##O", "O----O"] ➞ 3

// ["O--#--O", "dustO---Odust", "more dust"] ➞ 1
// Notes
// All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
// All elements in the list are strings.

function findGlasses(arr){
    const regex = /O-+O/;
    for (let i = 0; i < arr.length; i++) {
        if (regex.test(arr[i])) {
            return i;
        }
  }
}

//top solution:

// function findGlasses(arr){
//     return arr.findIndex(e => /O-+O/.test(e));
//   }

console.log(findGlasses(['phone', 'O-O', 'coins', 'keys']))
console.log(findGlasses(['OO', 'wallet', 'O##O', 'O----O']))
console.log(findGlasses((['O_O', 'O-O', 'OwO'])))