// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, etcetera).

function getSize(width, height, depth){
    return [(2*depth*height)+(2*depth*width)+(2*width*height), width*height*depth]
}

console.log(getSize(4,2,6))