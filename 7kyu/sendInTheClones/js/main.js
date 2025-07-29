// Why I did it?
// After a year on Codewars I really needed a holiday...

// But not wanting to drift backwards in the honour rankings while I was away, I hatched a cunning plan!

// The Cunning Plan
// So I borrowed my friend's "Clone Machine" and cloned myself :-)

// Now my clone can do my Kata solutions for me and I can relax!

// Brilliant!!

// Furthermore, at the end of the day my clone can re-clone herself...

// Double brilliant!!

// I wonder why I didn't think to do this earlier?

// So as I left for the airport I gave my clone instructions to:

// do my Kata solutions for me
// feed the cat
// try to keep the house tidy and not eat too much
// sleep
// clone yourself
// repeat same next day
// The Flaw
// Well, how was I supposed to know that cloned DNA is faulty?

// :-(

// Every time they sleep they wake up with decreased ability - they get slower... they get dumber... they are only able to solve 1 less Kata than they could the previous day.

// For example, if they can solve 10 Kata today, then tomorrow they can solve only 9 Kata, then 8, 7, 6... Eventually they can't do much more than sit around all day playing video games.

// And (unlike me), when the clone cannot solve any more Kata they are no longer clever enough to operate the clone machine either!

// The Return Home
// I suspected something was wrong when I noticed my Codewars honour had stopped rising.

// I made a hasty return home...

// ...and found 100s of clones scattered through the house. Mostly they sit harmlessly mumbling to themselves. The largest group have made a kind of nest in my loungeroom where they sit catatonic in front of the PlayStation.

// The whole place needs fumigating.

// The fridge and pantry are empty.

// And I can't find the cat.

// Kata Task
// Write a method to predict the final outcome where:

// Input:

// kata-per-day is the number of Kata I can solve per day
// Output:

// [number-of-clones, number-of-kata-solved-by-clones]

function clonewars(kataPerDay) {
  let totalClones = 0;
  let totalKata = 0;

  const queue = [kataPerDay]; // one clone starts at full power

  while (queue.length > 0) {
    const today = queue.shift();

    // Clone solves today's Kata
    totalKata += today;
    totalClones++;

    const nextDayAbility = today - 1;

    // If this clone can continue tomorrow, add it back for tomorrow
    if (nextDayAbility > 0) {
      queue.push(nextDayAbility);     // This clone continues tomorrow
      queue.push(nextDayAbility);     // This clone creates a new clone
    }
  }

  return [totalClones, totalKata];
}

console.log(clonewars(1))
console.log(clonewars(5))