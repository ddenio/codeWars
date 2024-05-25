// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. 
// Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]

function diff(aList, bList) {
    let final = [];
    aList.forEach((e) => {
        if (!bList.includes(e) && !final.includes(e)) {
            final.push(e);
        }
    });
    bList.forEach((e) => {
        if (!aList.includes(e) && !final.includes(e)) {
            final.push(e);
        }
    });
    return final.sort();
}

console.log(diff(["a","a","t","e","f","i","j"],["t","g","g","i","k","f"]))