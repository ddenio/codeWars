
// Given a list of lists containing only 1s and 0s, return a new list that differs from list 1 in its first element, list 2 in its second element, list 3 in its 3rd element, and so on.

// cantor([[0,0,0],
//         [1,1,1],
//         [0,1,0]]) = [1,0,1]

// cantor([[1,0,0],
//         [0,1,0],
//         [0,0,1]]) = [0,0,0]
// The nested list will always be perfectly square. Your solution should be a list containing only 1s and 0s.

function cantor(nestedList) {
    let final = [];
    for(let i = 0; i<nestedList.length;i++){
        if(nestedList[i][i]===1){
            final.push(0)
        }else{
            final.push(1)
        }
    }return final
  }

console.log(cantor([[0,0,0],
    [1,1,1],
    [0,1,0]]))
console.log(cantor([[1,0,0],
    [0,1,0],
    [0,0,1]]))