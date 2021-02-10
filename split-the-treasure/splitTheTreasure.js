const Iter = require('es-iter');

let treasure = [27, 7, 20]; //#[]  #[6,3,2,4,1] #[4,4,4]  #[27,7,20] --> (20,7)+(27)

let totalTreasure = treasure.reduce((a, b) => a + b, 0);

console.log('Total Treasure:', totalTreasure);

for (let no_crew = 2; no_crew <= treasure.length; no_crew++) {
  each = totalTreasure / no_crew;

  let element_lst = [];
  let element_lst2 = [];
  for (let i = 0; i <= treasure.length; i++) {
    let tresComb = new Iter(treasure).combinations(i);
    console.log(tresComb);
    for (let element of tresComb) {
      elementSum = element.reduce((a, b) => a + b, 0);

      if (elementSum == each) {
        element_lst = element_lst.concat(element).sort();

        //     element_lst2.push(element);
2
        //     if (element_lst.join() === treasure.sort().join()) {
        //       console.log(each, element_lst2, no_crew);
        //     }
      }
      console.log(element);
    }
  }
}
