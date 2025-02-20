// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    const alpha = 'zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(e => alpha[Number(e)-1]).join('')
}

console.log(switcher(['24','12','23','22']))
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']))