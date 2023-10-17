// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


function mergeArrays(a,b) {
    let c = a.concat(b);
    let d = c.filter((item, 
        index) => c.indexOf(item) === index); 
    return d.sort(function(a,b){
        return a-b
    })
  } 

console.log(mergeArrays([2,2,2,3,4,5],[2,5,7,8]))