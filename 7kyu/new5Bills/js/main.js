// The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!

// Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.

function getNewNotes(salary,bills){
    const amount = Math.floor((salary - bills.reduce((total,curr) => total+curr,0))/5)
    return amount > 0 ? amount : 0 
}

console.log(getNewNotes(2000, [500, 160, 400]))
console.log(getNewNotes(1260, [500, 50, 100]))
console.log(getNewNotes(3600, [1800, 350, 460, 500, 15]))
console.log(getNewNotes(1995, [1500, 19, 44]))
console.log(getNewNotes(10000, [1800, 500, 1200, 655, 150]))
console.log(getNewNotes(2300, [590, 1500, 45, 655, 150]))