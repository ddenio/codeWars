// Problem Description:

// As a MotoGP commentator, you're tasked with interpreting qualifying results to determine each racer's starting position on the grid. The grid is organized into rows of three racers each, with positions within a row not aligned. Every rider in a row starts a little forward from the next rider. The lowest position number marks the top of the row, while the highest indicates the bottom, with the middle position between them.

// Write a function that takes the name of a racer and their qualifying position as input and returns a string indicating their starting position on the grid.

// Example grid: https://images.app.goo.gl/ogBU5QvvK6vd5k2j9

// Function Specifications:

// Input: A string representing the racer's name and an integer indicating their qualifying position.
// Output: A string describing the racer's starting position on the grid in the specified format.

// Example Input: 'Valentino Rossi', 11
// Example Output: 'Valentino Rossi starts from the middle of the 4th row

// Exceptions:

// If position is 1 then the text should be '[Rider Name] starts from pole position'
// If the racer qualifies in the 1st row, the output should use "front row" instead.
// Example Input: 'Jorge Martin, 2
// Example Output: 'Jorge Martin starts from the middle of the front row'

// Don't worry about validating the input. Rider name is always a string. Position is a number between 1 and 20 included.

// Thank you for passing by, I hope you enjoy solving this kata.

function gridPosition(name, position){
    switch(position){
        case 1: return `${name} starts from pole position`
        case 2: return `${name} starts from the middle of the front row`
        case 3: return `${name} starts from the bottom of the front row`
        case 4: return `${name} starts from the top of the 2nd row`
        case 5: return `${name} starts from the middle of the 2nd row`
        case 6: return `${name} starts from the bottom of the 2nd row`
        case 7: return `${name} starts from the top of the 3rd row`
        case 8: return `${name} starts from the middle of the 3rd row`
        case 9: return `${name} starts from the bottom of the 3rd row`
        case 10: return `${name} starts from the top of the 4th row`
        case 11: return `${name} starts from the middle of the 4th row`
        case 12: return `${name} starts from the bottom of the 4th row`
        case 13: return `${name} starts from the top of the 5th row`
        case 14: return `${name} starts from the middle of the 5th row`
        case 15: return `${name} starts from the bottom of the 5th row`
        case 16: return `${name} starts from the top of the 6th row`
        case 17: return `${name} starts from the middle of the 6th row`
        case 18: return `${name} starts from the bottom of the 6th row`
        case 19: return `${name} starts from the top of the 7th row`
        case 20: return `${name} starts from the middle of the 7th row`
    }
  }

console.log(gridPosition('Marc Marquez',1))
console.log(gridPosition('Marc Marquez',11))
console.log(gridPosition('Marc Marquez',13))