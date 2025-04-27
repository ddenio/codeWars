// He also have a list of gifts corresponding to each integer. His list is as follows:

// GIFTS = {
//     1 => 'Toy Soldier',
//     2 => 'Wooden Train',
//     4 => 'Hoop',
//     8 => 'Chess Board',
//    16 => 'Horse',
//    32 => 'Teddy',
//    64 => 'Lego',
//   128 => 'Football',
//   256 => 'Doll',
//   512 => "Rubik's Cube"
// }
// This list is made available to you, as GIFTS.

// The integer for each child is such that the child should get the highest toy lower than or equal to that integer, and then, if there's more left, also get the highest toy lower than the rest and so on. Know that Santa never gives the same gift twice.

// For example, by Timmy's name is 160. This means that Timmy should get both a football and a teddy, because 128 + 32 = 160.


const GIFTS = {
    1: 'Toy Soldier',
    2: 'Wooden Train',
    4: 'Hoop',
    8: 'Chess Board',
    16: 'Horse',
    32: 'Teddy',
    64: 'Lego',
    128: 'Football',
    256: 'Doll',
    512: "Rubik's Cube"
};

function gifts(number) {

    let res = [];
  
    for (let i in GIFTS)
      if (number & i)
        res.push(GIFTS[i]);
  
    return res.sort();
  
  }
// function gifts(number) {
//     const result = []

//     for (let value of Object.keys(GIFTS).map(Number).sort((a, b) => b - a)) {
//         if (number >= value) {
//             number -= value
//             result.push(GIFTS[value])
//         }
//     }

//     return result.sort()
// }

console.log(gifts(3))
console.log(gifts(22))