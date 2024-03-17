// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array){
    let finalArr = [array[0]]
    for(let i = 1; i < array.length;i++){
        finalArr.push(finalArr[i-1]+array[i])
    }return finalArr
}

//codewars top solution:

// function spacey(array){
// 	let string = ''
// 	return array.map( (e) => string += e )
// }

console.log(spacey(['kevin','has','no','space']))
console.log(spacey(['this','cheese','has','no','holes']))