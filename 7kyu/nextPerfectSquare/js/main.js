function findNextSquare(sq) {
    if (sq > 0 & Math.sqrt(sq) % 1 === 0){
        let base = Math.sqrt(sq);
        base = base + 1;
        return base*base
    }else {
        return -1
    }
    
  }

console.log(findNextSquare(143))