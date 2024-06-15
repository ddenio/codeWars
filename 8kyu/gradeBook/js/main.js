// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade(s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3;
    return (avg >= 90 && avg <= 100) ? 'A' :
           (avg >= 80 && avg < 90) ? 'B' :
           (avg >= 70 && avg < 80) ? 'C' :
           (avg >= 60 && avg < 70) ? 'D' :
           'F';
}

console.log(getGrade(100,85,96))
console.log(getGrade(82,85,87))
console.log(getGrade(48,55,52))
console.log(getGrade(66,62,68))