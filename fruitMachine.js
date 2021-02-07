const { Console } = require('console');

let money_in_machine = 100;
let user_credit = 50; //initial credit of user
let play_credit = 5; //cost of a play
let no_of_free_play = 0;
// let constant = 1;
const symbols = ['black', 'white', 'green', 'yellow'];
const no_of_slots = 4;

function check_difference(slots) {
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (slots[i] === slots[j]) {
        return false;
      }
    }
  }
  return true;
}
// function adjacentElements(slots) {
//   // all slots elements same/
//   if (slots[0] === slots[1] && slots[1] === slots[2] && slots[2] === slots[3]) {
//     return false;
//   } else {
//     for (let i = 0; i < 3; i++) {
//       let element1 = slots[i];
//       let element2 = slots[i + 1];
//       if (element1 === element2) {
//         return true;
//       }
//       return false;
//     }
//   }
// }
function play(user_credit, money_in_machine) {
  let slots = [];
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * symbols.length);
    slots.push(symbols[index]);
  }
  slots = ['white', 'green', 'black', 'yellow'];
  console.log(slots);
  //all slots elements same
  if (slots[0] === slots[1] && slots[1] === slots[2] && slots[2] === slots[3]) {
    user_credit = user_credit + money_in_machine;
    money_in_machine = 0;

    return [user_credit, money_in_machine, no_of_free_play];
  }
  //all slots' elements different
  if (check_difference(slots)) {
    user_credit = user_credit + money_in_machine / 2;
    money_in_machine = money_in_machine / 2;
    return [user_credit, money_in_machine, no_of_free_play];
  }

  // //// 2 or more adjacent slots are equal
  // if (adjacentElements(slots)) {
  //   if (money_in_machine >= 5 * play_credit) {
  //     user_credit = user_credit + 5 * play_credit;
  //     money_in_machine = money_in_machine - 5 * play_credit;
  //   } else {
  //     no_of_free_play =
  //       no_of_free_play + (5 * play_credit - money_in_machine) / play_credit;
  //     user_credit = user_credit + money_in_machine;
  //     money_in_machine = 0;
  //     console.log('>>>', no_of_free_play);

  //   }
  //   return user_credit, money_in_machine, no_of_free_play;
  // }

  return [user_credit, money_in_machine, no_of_free_play];
}

for (let i = 0; i < 10; i++) {
  if (user_credit >= play_credit) {
    user_credit = user_credit - play_credit;
    money_in_machine = money_in_machine + play_credit;
    console.log('1>>>', user_credit, money_in_machine);
    let variables = play(user_credit, money_in_machine);
    user_credit = variables[0];
    money_in_machine = variables[1];
    no_of_free_play = variables[2];
    console.log('2>>>', user_credit, money_in_machine, no_of_free_play);
  }
}
