// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

function validateHello(greetings) {
    return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
}

console.log(validateHello("Hi"))
console.log(validateHello('hello'))
console.log(validateHello("green"))
console.log(validateHello("salut"))