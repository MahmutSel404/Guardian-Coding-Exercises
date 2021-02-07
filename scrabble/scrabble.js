const fetch = require('node-fetch');

//GIVEN 1
const dict = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
//GIVEN 2
const tilesOfBag = Array(12)
  .fill('E')
  .concat(
    Array(9).fill('A'),
    Array(9).fill('I'),
    Array(8).fill('O'),
    Array(6).fill('N'),
    Array(6).fill('R'),
    Array(6).fill('T'),
    Array(4).fill('L'),
    Array(4).fill('S'),
    Array(4).fill('U'),
    Array(4).fill('D'),
    Array(3).fill('G'),
    Array(2).fill('B'),
    Array(2).fill('C'),
    Array(2).fill('N'),
    Array(2).fill('P'),
    Array(2).fill('F'),
    Array(2).fill('H'),
    Array(2).fill('V'),
    Array(2).fill('W'),
    Array(2).fill('Y'),
    Array(1).fill('K'),
    Array(1).fill('J'),
    Array(1).fill('X'),
    Array(1).fill('Q'),
    Array(1).fill('Z')
  );
console.log(tilesOfBag);
let item = tilesOfBag[Math.floor(Math.random() * tilesOfBag.length)];
console.log(item);

//GIVEN 3
fetch(
  'https://raw.githubusercontent.com/guardian/coding-exercises/main/scrabble/dictionary.txt'
)
  .then((response) => response.text())
  .then((text) => console.log(text))
