// You are taking a music class and you need to know what notes are on every fret of the guitar. There are six strings on the guitar and 18 frets. Given the name of the string as a string"E", "A", "D", "G", "B" or "e", as well the fret in integer format (open note is 0), return the note played.

// We are going to use a music scale with only sharps and regular notes, so the 12 notes to know are: A, A#, B, C, C#, D, D#, E, F, F#, G, and G# (notice that B# and E# do not exist).

// Moving up one fret moves one note up the scale, so the open note (0) on E is E; the 1st fret note is F, and the second fret note is F#; etc. You can find a picture of this here:

// We're not concerned with octaves, so just return the note as a capital letter ("C#", "B", "D" etc.)

// Examples
// "e", 0   -->  "E"
// "D", 5   -->  "G"
// "E", 18  -->  "A#"

function whatNote(string, fret){
    const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
    const stringNotes = {
    "E": "E",
    "A": "A",
    "D": "D",
    "G": "G",
    "B": "B",
    "e": "E"
  }
  const openNote = stringNotes[string]
  const startIndex = notes.indexOf(openNote)
  const noteIndex = (startIndex + fret) % 12
  
  return notes[noteIndex]
}

console.log(whatNote("e",0))
console.log(whatNote("D",5))
console.log(whatNote("E",18))