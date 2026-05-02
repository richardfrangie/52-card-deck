// This commented code shows how to validate the input of data attribute
// , andshow to create the cards using JS.
//////////////////////////////////////////////////

// const cards = document.querySelectorAll('.card');

// // Check that 'rank' is a letter 'a','j','q' or 'k', or
// // it's a number between 2 and 10, and return the rank in word.
// function wordRank(rank) {

//   const cardNumbers = ['two', 'three', 'four', 'five',
//     'six', 'seven', 'eight', 'nine', 'ten'];
//   const cardWords = {a: 'ace', j: 'jack', q: 'queen', k: 'king'};

//   if (Number(rank).toString() != 'NaN') {
//     if (Number(rank).toFixed() == Number(rank) &&
//       (Number(rank) >= 2 && Number(rank) <= 10)) {
//         return {number: Number(rank), word: cardNumbers[(rank - 2).toString()]};
//       } else {
//         console.log('Your \'data-rank\' attribute number does not match any of the numbers on the cards (2,3,4,5,6,7,8,9,10).');
//       }
//   } else if (Object.keys(cardWords).indexOf(rank.toLowerCase()) != -1) {
//     return {number: false, word: cardWords[rank.toLowerCase()]};
//   } else console.log('Your \'data-rank\' attribute letter doesn\'t match any of the cards (A,J,Q,K).');
// }

// // Check that 'suit' is a poker word, and return the suit symbol.
// function stringSymbol(suit) {

//   const suitSymbol = {diamond: '♦', club: '♣', spade: '♠', heart: '♥'}

//   if (Object.keys(suitSymbol).indexOf(suit.toLowerCase()) != -1) {
//     return suitSymbol[suit.toLowerCase()];
//   } else console.log('Your \'data-suit\' attribute word doesn\'t match any of the cards (diamond, club, spade, heart).');
// }

// // Create the structure of a card.
// function createStructure(card) {

//   const suit = card.getAttribute('data-suit');
//   const rank = card.getAttribute('data-rank');
//   card.setAttribute('data-rank', rank.toUpperCase());

//   const symbol = stringSymbol(suit);
//   const classRank = wordRank(rank).word;
//   const numberOfSymbols = (wordRank(rank).number) ? wordRank(rank).number : 1;

//   const chest = document.createElement('div');
//   chest.classList.add('chest', classRank);
//   chest.setAttribute('data-suit', symbol);
//   card.appendChild(chest);
//   if (classRank == 'ace') chest.textContent = symbol;

//   if (numberOfSymbols != 1) {
//     for (let i = 0; i < numberOfSymbols; i++) {
//       const tag = document.createElement('div');
//       tag.classList.add('symbol', suit);
//       chest.appendChild(tag);
//     }
//   }

//   card.setAttribute('data-suit', symbol);
//   return card;
// }

// Array.from(cards).map(createStructure);

// console.log(cards);
