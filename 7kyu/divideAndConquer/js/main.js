// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i<x.length;i++){
        if(typeof x[i] === 'number'){
            sum1+=x[i]
        }else{
            sum2+=Number(x[i])
        }
    }
    return sum1-sum2
}

console.log(divCon([9, 3, '7', '3']))