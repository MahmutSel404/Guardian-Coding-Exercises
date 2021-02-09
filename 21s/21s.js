const { placeholder } = require('@babel/types');
let Sam;
let Dealer;
let deck = [
  { name: '2', value: 2 },
  { name: '3', value: 3 },
  { name: '4', value: 4 },
  { name: '5', value: 5 },
  { name: '6', value: 6 },
  { name: '7', value: 7 },
  { name: '8', value: 8 },
  { name: '9', value: 9 },
  { name: '10', value: 10 },
  { name: 'J', value: 10 },
  { name: 'Q', value: 10 },
  { name: 'K', value: 10 },
  { name: 'A', value: 11 },
];
limit = 21;
// console.log(deck2);
let totalCardDeck = new Array();
for (let i = 0; i < 4; i++) {
  totalCardDeck = totalCardDeck.concat(deck);
}

//shuffle the deck
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(totalCardDeck);

SamCard1 = totalCardDeck.shift().value;
SamCard2 = totalCardDeck.shift().value;
DealerCard1 = totalCardDeck.shift().value;
DealerCard2 = totalCardDeck.shift().value;

Sam = SamCard1 + SamCard2;
Dealer = DealerCard1 + DealerCard2;
console.log('Sam beginning', Sam);
console.log('Dealer beginning', Dealer);

// console.log(totalCardDeck.length);

if (Sam == 21 && Dealer !== 21) {
  console.log('Blackjack for Sam!');
} else if (Dealer == 21 && Sam !== 21) {
  console.log('Blackjack for Dealer!');
} else if (Sam > 21) {
  console.log('Sam lost the game');
} else if (Dealer > 21) {
  console.log('Dealer lost the game');
} else if (Sam > 21 && Dealer > 21) {
  console.log('draw');
} else {
  function SamTurn(Sam, Dealer) {
    function playing() {
      while (Sam < limit || Sam < Dealer) {
          limit = 17; 
        let SamNext = totalCardDeck.shift().value;
        console.log('SamNext', SamNext);
        Sam += SamNext;
        console.log('Sam', Sam);

        if (Sam >= 17 && Sam <= 21) {
          DealerTurn(Sam, Dealer);
        } else if (Sam > 21) {
          console.log('Sam lost the game!');
        }
      }
    }
    playing();
  }

  function DealerTurn(Sam, Dealer) {
    function playing() {
      while (Dealer <= Sam) {
        let DealerNext = totalCardDeck.shift().value;
        console.log('DealerNext', DealerNext);
        Dealer += DealerNext;
        console.log('Dealer', Dealer);

        if (Dealer > Sam && Dealer <= 21) {
          SamTurn(Sam, Dealer);
        } else if (Dealer > 21) {
          console.log('Dealer lost the game!');
        }
      }
    }
    playing();
  }

  SamTurn(Sam, Dealer);
}
