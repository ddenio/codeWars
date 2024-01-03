// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// function remove(s,n){
//     let result = "";
//     let count = 0;
//     for(let i = 0; i<s.length;i++){
//         if(s[i] === '!' && count < n){
//             count++
//         }else{
//             result+=s[i]
//         }
//     }return result
//   }

//console.log(remove("!Hi!!!!", 4))

//top codewars solutiuon:

function remove(s,n){
    for (let i=0; i<n; i++) {
        s=s.replace("!","");
    }
    return s;
  }

console.log(remove("!Hi!!!!!", 4))