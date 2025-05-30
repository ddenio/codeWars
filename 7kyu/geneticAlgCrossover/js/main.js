// In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

// The one-point crossover consists in swapping one's cromosome part with another in a specific given point. The image bellow shows the crossover being applied on chromosomes 1011011001111 and 1011100100110 with the cut point (index) 4:

// In this kata you have to implement a function that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

// Example:
// chromosome1 = "111000"
// chromosome2 = "000110"
// index = 3
// # should return ["111110", "000000"]

function crossover(c1,c2,index){
    c1Fin = c1.slice(0,index) + c2.slice(index)
    c2Fin = c2.slice(0,index) + c1.slice(index)
    return [c1Fin,c2Fin]
}

console.log(crossover("110","001",2))
console.log(crossover("111000","000110",3))