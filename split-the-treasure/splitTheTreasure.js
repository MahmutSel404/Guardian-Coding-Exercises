const Iter = require('es-iter');

let treasure = [6, 3, 2, 4, 1]; //#[3,3,3,3,2,2,2,2,2,2,2,2]  #[6,3,2,4,1] #[4,4,4]  #[27,7,20] --> (20,7)+(27)

let totalTreasure = treasure.reduce((a, b) => a + b, 0);

console.log('Total Treasure:', totalTreasure);

// for (let i=0; i<treasure.length; i++){
//   for()
// }

for (let no_crew = 2; no_crew <= treasure.length; no_crew++) {
  each = totalTreasure / no_crew;
  // console.log('e', each);

  let element_lst = [];
  let element_lst2 = [];
  for (let i = 0; i <= treasure.length; i++) {
    let tresComb = new Iter(treasure).combinations(i);
    for (let element of tresComb) {
      elementSum = element.reduce((a, b) => a + b, 0);

      if (elementSum == each) {
        // console.log(element, elementSum);
        element_lst = element_lst.concat(element).sort();
        // console.log("lst",element_lst)

        // console.log(treasure.sort())
        if (element_lst.join() === treasure.sort().join()) {
          // console.log(element_lst);
          console.log(each);
          console.log(element)
        }
      }
    }
  }
}
