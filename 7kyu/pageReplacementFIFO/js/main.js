// In a computer operating system that uses paging for virtual memory management, page replacement algorithms decide which memory pages to 
// page out when a page of memory needs to be allocated. Page replacement happens when a requested page is not in memory (page fault) and
//  a free page cannot be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.

// The FIFO page replacement algorithm
// The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm that requires little bookkeeping on the 
// part of the operating system. The idea is obvious from the name: the operating system keeps track of all the pages in memory in a queue, 
// with the most recent arrival at the back, and the oldest arrival in front. When a page needs to be replaced, the oldest page is selected. 
// Note that a page already in the queue is not pushed at the end of the queue if it is referenced again.

// Your task is to implement this algorithm. The function will take two parameters as input: 
// the number of maximum pages that can be kept in memory at the same time n and a reference list containing numbers. 
// Every number represents a page request for a specific page (you can see this number as the unique ID of a page). 
// The expected output is the status of the memory after the application of the algorithm. Note that when a page is inserted in the memory,
//  it stays at the same position until it is removed from the memory by a page fault.

// Example:
// Given:

// N = 3,
// REFERENCE LIST = [1, 2, 3, 4, 2, 5],
//   * 1 is read, page fault --> memory = [1];
//   * 2 is read, page fault --> memory = [1, 2];
//   * 3 is read, page fault --> memory = [1, 2, 3];
//   * 4 is read, page fault --> memory = [4, 2, 3];
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> memory = [4, 5, 3].
// So, at the end we have the list [4, 5, 3], which is what you have to return. If not all the slots in the memory get occupied after applying the algorithm, 
// fill the remaining slots (at the end of the list) with -1 to represent emptiness (note that the IDs will always be >= 1).



// function fifo(n, referenceList) {
//     let lastArr = [];         // An array to represent the memory with a maximum of 'n' pages.
//     let replaceIndex = 0;     // An index to keep track of which page to replace next in 'lastArr'.

//     for (let i = 0; i < referenceList.length; i++) {
//         if (lastArr.length < n) {
//             if (!lastArr.includes(referenceList[i])) {
//                 // If memory is not full and the requested page is not in memory, add it.
//                 lastArr.push(referenceList[i]);
//                 console.log(i); // Print that a page fault occurred (a page was added to memory).
//             }
//         } else {
//             if (!lastArr.includes(referenceList[i])) {
//                 // If memory is full and the requested page is not in memory, replace a page.
//                 console.log(`Page ${lastArr[replaceIndex]} is replaced.`); // Print the page being replaced.
//                 lastArr[replaceIndex] = referenceList[i]; // Replace the page at the 'replaceIndex'.
//                 replaceIndex = (replaceIndex + 1) % n; // Update 'replaceIndex' in a circular manner.
//             }
//         }
//     }
//     return lastArr; // Return the final state of the memory.
// }

// console.log(fifo(5, []));

function fifo(n, referenceList) {
    let lastArr = [];
    let replaceIndex = 0;

    for (let i = 0; i < referenceList.length; i++) {
        if (lastArr.length < n) {
            if (!lastArr.includes(referenceList[i])) {
                lastArr.push(referenceList[i]);
                console.log(i);
            }
        } else {
            if (!lastArr.includes(referenceList[i])) {
                console.log(`Page ${lastArr[replaceIndex]} is replaced.`);
                lastArr[replaceIndex] = referenceList[i];
                replaceIndex = (replaceIndex + 1) % n;
            }
        }
    }

    // After processing all requests, check if there are empty slots in memory.
    while (lastArr.length < n) {
        lastArr.push(-1);
    }

    return lastArr;
}

console.log(fifo(5, []));







