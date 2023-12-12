// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
	if(array.length % 2 === 0){
        return [array[array.length/2],array[(array.length/2)-1]]
    }return [array[(array.length+1)/2],array[((array.length+1)/2)-1],array[((array.length+1)/2)-2]]
}

console.log(reverseMiddle([1, 2, 3, 4, 5]))
console.log(reverseMiddle([1, 2, 3, 4, 5, 6]))
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7]))