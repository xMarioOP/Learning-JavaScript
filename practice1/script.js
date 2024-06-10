/*
Exercise: Card Game Implementation
Imagine you're building a simple card game. You have an array representing a deck of cards, and you
want to perform the following operations:
1. Shuffle the Deck: Randomly rearrange the order of the cards in the deck.
2. Deal Cards: Deal a specific number of cards to players from the top of the deck. This exercise
involves using the splice() method to shuffle the deck and deal cards.

*/

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function barajar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function repartir(array, numCards) {
    return array.splice(0, numCards)
}

barajar(cards)
console.log("Cartas barajadas:", cards);

let playerOne = repartir(cards, 3)
let playerTwo = repartir(cards, 3)

console.log("Jugador uno, tus cartas son: ", playerOne);
console.log("Jugador dos, tus cartas son: ", playerTwo);
