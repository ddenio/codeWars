// Quadratic equations are equations in the form: 
// A
// x
// 2
// +
// B
// x
// +
// C
// =
// 0
// Ax 
// 2
//  +Bx+C=0.
// You can find 
// x
// x's value in terms of A, B, and C, using the formula:

// x
// =
// −
// b
// ±
// b
// 2
// −
// 4
// a
// c
// 2
// a
// x= 
// 2a
// −b± 
// b 
// 2
//  −4ac
// ​
 
// ​
 
// Your job is to write a function that takes A, B, and C, and returns either undefined (x cannot be found; the equation is unsolveable), or an array of possible values for x (one or two numerical values).

// NOTE: A, B, or C, can be 0. In these cases, x should still be found. This may not require the full quadratic formula to solve, but it's up to you how to find the answer.

// You should do this as efficiently as possible; square-rooting is a pretty CPU-intensive thing, so we want to use Math.sqrt as few times as possible. If you use Math.sqrt more than is necessary, you won't pass the kata.

function solveQuadratic(a, b, c) {
    if (a === 0) {
        if (b === 0) return undefined;
        return [-c / b];
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) return undefined;

    const twoA = 2 * a;

    if (discriminant === 0) {
        return [-b / twoA];
    }

    const x1 = (-b - discriminant) / twoA;
    const x2 = (-b + discriminant) / twoA;

    return [x1, x2];
}

console.log(solveQuadratic(1,2,0))
console.log(solveQuadratic(1,2,3))
console.log(solveQuadratic(1,0,3))