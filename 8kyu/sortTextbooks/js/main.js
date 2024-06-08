// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) 
// full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

function sorter(textbooks) {
    textbooks.sort((a, b) => {
        const textA = a.toLowerCase();
        const textB = b.toLowerCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    })
    return textbooks
}

console.log(sorter(['Algebra', 'History', 'Geometry', 'English']))
console.log(sorter(['Algebra', 'history', 'Geometry', 'english']))
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))