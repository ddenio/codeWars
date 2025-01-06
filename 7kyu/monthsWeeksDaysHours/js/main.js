// Given a number of minutes, translate it into a readible human timestamp.

// For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

// Given that each month has 28 days.

// The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.

function displayValue(value) {
    const units = [
        { name: "month", value: 28 * 24 * 60 },
        { name: "week", value: 7 * 24 * 60 },
        { name: "day", value: 24 * 60 },
        { name: "hour", value: 60 },
        { name: "minute", value: 1 }
    ];
    const result = [];
    for (const { name, value: unitMinutes } of units) {
        const values = Math.floor(value / unitMinutes);
        if (values > 0) {
            result.push(`${values} ${name}${values > 1 ? 's' : ''}`);
            value %= unitMinutes; 
        }
    }
    return result.join(' ');
}

console.log(displayValue(1))
console.log(displayValue(100))
console.log(displayValue(40321))
console.log(displayValue(52874))