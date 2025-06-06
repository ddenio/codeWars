// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

// ALF has the technology to bring the spaceship home if he can lock on to its location.

// Given a map:

// ..........
// ..........
// ..........
// .......X..
// ..........
// ..........
// The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

// In this example:

// findSpaceship(map) => [7, 2]

function findSpaceship(map) {
  if (typeof map !== 'string') return "Spaceship lost forever."
  map = map.split('\n')
  let rowIndex = map.findIndex(row => row.includes('X'))
  if (rowIndex === -1) return "Spaceship lost forever."
  let xIndex = map[rowIndex].indexOf('X')
  let yIndex = map.length - 1 - rowIndex
  return [xIndex, yIndex]
}

console.log(findSpaceship('..........\n..........\n.......X..\n..........\n..........'))
console.log(findSpaceship('X'))