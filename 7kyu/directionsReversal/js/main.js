// In this Kata, you will be given directions and your task will be to find your way back.

// solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
// solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
// More examples in test cases.

function solve(arr){
   arr = arr.join(', ').replace(/\bLeft\b/g, "TEMP").replace(/\bRight\b/g, "Left").replace(/\bTEMP\b/g, "Right").split(', ').reverse();
   let finalArr= []
    for(let i = 1; i < arr.length;i++){
        let newArr = arr[i].split(' ')
        let temp = arr[i-1].split(' ')[0]
        newArr.splice(0,1,temp)
        finalArr.push(newArr.join(' '))
    }
    finalArr.unshift(`Begin on ${arr[0].split(' ')[2]} ${arr[0].split(' ')[3]}`)
    return finalArr
}


console.log(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]))