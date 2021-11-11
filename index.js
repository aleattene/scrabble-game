
// Import Modules
const prompt = require("prompt-sync")();
const fs = require("fs");

// Declaration of data structures
const alphabet = [{'A': 14}, {'B': 3}, {'C': 6}, {'D': 3}, {'E': 11}, {'F': 3}, {'G': 2}, {'H': 2},
    {'I': 12}, {'L': 5}, {'M': 5}, {'N': 5}, {'O': 15}, {'P': 3}, {'Q': 1}, {'R': 6},
    {'S': 6}, {'T': 6}, {'U': 5}, {'V': 3}, {'Z': 2}];

const pointLetters = {'A': 1, 'B': 5, 'C': 2, 'D': 5, 'E': 1, 'F': 5, 'G': 8, 'H': 8,
    'I': 1, 'L': 3, 'M': 3, 'N': 3, 'O': 1, 'P': 5, 'Q': 10, 'R': 2,
    'S': 2, 'T': 2, 'U': 3, 'V': 5, 'Z': 8 };

let available_letters = [];

// Creation of the object containing all the available letters
for (let i of alphabet) {
    for (let quantity = 0; quantity < Object.values(i); quantity++){
        available_letters.push(Object.keys(i))}
}

console.log(available_letters)  // debug
console.log(available_letters.length)  // debug


let hand = ["A", "B", "B", "A", "G", "L", "I", "A"]  // debug

/*let hand = [];

for (let i = 1; i<=8; i++) {
    let tmp = available_letters[Math.floor(Math.random() * available_letters.length)]
    hand.push(available_letters.splice(available_letters.indexOf(tmp), 1)[0][0]);
}
*/

console.log(hand)   // debug
console.log(available_letters.length)  // debug
