// Task
// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"
// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"];
// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female
// You will need to output the full 16 digit driving license number, in all UPPERCASE.

function driver(data) {
    const [first, middle, surname, dobStr, gender] = data
    const dobMap = {
        "January": "01", "Jan": "01",
        "February": "02", "Feb": "02",
        "March": "03", "Mar": "03",
        "April": "04", "Apr": "04",
        "May": "05",
        "June": "06", "Jun": "06",
        "July": "07", "Jul": "07",
        "August": "08", "Aug": "08",
        "September": "09", "Sep": "09",
        "October": "10", "Oct": "10",
        "November": "11", "Nov": "11",
        "December": "12", "Dec": "12"
    }

    const [day, monthText, year] = dobStr.split("-")
    const decadeDigit = year[2]
    const yearDigit = year[3]
    let monthNum = dobMap[monthText]

    
    if (gender === "F") {
        monthNum = (parseInt(monthNum, 10) + 50).toString().padStart(2, "0")
    }

    const surnamePart = surname.toUpperCase().padEnd(5, "9").slice(0, 5)
    const dayPart = day.padStart(2, "0")

    const initials = first[0].toUpperCase() + (middle ? middle[0].toUpperCase() : "9")

    return surnamePart + decadeDigit + monthNum + dayPart + yearDigit + initials + "9AA"
}


console.log(driver(["John","Jimmy","Smith","01-Jan-2000","M"]))
console.log(driver(["Johanna","","Gibbs","13-Dec-1981","F"]))
console.log(driver(["Andrew","Robert","Lee","02-September-1981","M"]))