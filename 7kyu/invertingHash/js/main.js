// Summary
// Given a Hash made up of keys and values, invert the hash by swapping them.

// Examples
// Given:

//   { a: '1',
//     b: '2',
//     c: '3' }

// Return:

//   { 1: 'a',
//     2: 'b',
//     3: 'c' }



// Given:

//   { foo:   'bar',
//     hello: 'world' }

// Return:

//   { bar:   'foo',
//     world: 'hello' }

function invertHash(hash) {
    const inverted = {};
    for (const key in hash) {
      if (hash.hasOwnProperty(key)) {
        inverted[hash[key]] = key;
      }
    }
    return inverted;
}

console.log(invertHash({ a: '1',
    b: '2',
    c: '3' }))
console.log(invertHash({ foo:   'bar',
    hello: 'world' }))