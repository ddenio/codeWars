// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let n = size
    let mult = 1
    let currArr = []
    let finalArr = []
    while(n > 0){
        for(let i = 1 ; i <= size;i++){
            currArr.push(i*mult)
        }
        n--
        mult++
        finalArr.push(currArr)
        currArr = []
    }return finalArr
  }

console.log(multiplicationTable(3))
console.log(multiplicationTable(4))