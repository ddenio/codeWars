// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let strSplit = str.split('')
   let final = []
   for(let i = 0; i < strSplit.length; i+=2){
        if(strSplit[i+1]=== undefined){
            final.push(strSplit[i]+"_")
        }else{
            final.push(strSplit[i]+strSplit[i+1])
        }
   }return final
}

console.log(solution('abc'))
console.log(solution('abcdef'))
console.log(solution('abcdefg'))