let treasure = [27, 7, 20];

let totalTreasure = treasure.reduce((a, b) => a + b, 0);

function subset_sum(treasure, each, partial) {
  let s;
  if (!partial.length == 0) {
    s = partial.reduce((a, b) => a + b, 0);
  }
  //let s = 27
  //check if the partial sum is equals to target
  if (s == each) {
    console.log(partial, each);
  }
  if (s >= each) {
    return false;
  }

  for (let i = 0; i < treasure.length-1; i++) {
    let n = treasure[i];
    let remaining = treasure.slice(i);
    console.log(remaining);


    subset_sum(remaining, each, partial.concat([n]));
  }
}

let each;
for (let i = 2; i <= treasure.length; i++) {
  each = totalTreasure / i;
  //console.log(each);
  let partial = [];
  subset_sum(treasure, each, partial);
}
// let a = 56.5;
// if (a%1==0) {
//     a = Number(a)
//     console.log(a)
// }
