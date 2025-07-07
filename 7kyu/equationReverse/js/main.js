// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"

function solve(eq){
    return eq.match(/[\w]+|[+\-*/]/g).reverse().join('')
}

console.log(solve("100*b/y"))
console.log(solve("a+b-c/d*30"))
console.log(solve("a*b/c+50"))