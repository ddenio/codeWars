// function greet(name){
//   if(name === "Johnny") {
//     return "Hello, my love!";
//   } else { 
//     return "Hello, " + name + "!";
// }
// }
// console.log(greet('Richard'))


function greet(name) {
    return (name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`)
}
 
console.log(greet('Johny'))
