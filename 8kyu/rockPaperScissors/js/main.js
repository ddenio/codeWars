// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"

function rps(p1, p2){
    return p1 === 'rock' && p2 === 'paper' || p1 === 'paper' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'rock' ? 'Player 2 won!' : p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper' ? 'Player 1 won!' : 'Draw!'
}

console.log(rps('rock', 'paper'))
console.log(rps('rock', 'rock'))
console.log(rps('rock', 'scissors'))