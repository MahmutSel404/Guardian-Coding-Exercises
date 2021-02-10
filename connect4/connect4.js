const prompt = require('prompt-sync')();

const rows = 7;
const column = 6;
let grid = [];
let marker = 'x';

for (let i = 0; i < rows; i++) {
  const col = [];
  for (let j = 0; j < column; j++) {
    col.push('.');
  }
  grid.push(col);
}

function checkplay(marker) {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
      //check horizontally
      if (
        grid[i][j] === marker &&
        grid[i][j + 1] == marker &&
        grid[i][j + 2] == marker &&
        grid[i][j + 3] == marker
      ) {
        console.log('congrats horizontally');
        return true;
      }

      //check vertically
      if (
        grid[i][j] === marker &&
        grid[i + 1][j] == marker &&
        grid[i + 2][j] == marker &&
        grid[i + 3][j] == marker
      ) {
        console.log('congrats vertically');
        return true;
      }
      //check diagonal left-up to right down
      if (
        grid[i][j] === marker &&
        grid[i + 1][j + 1] == marker &&
        grid[i + 2][j + 2] == marker &&
        grid[i + 3][j + 3] == marker
      ) {
        console.log('congrats diagonal + 1');
        return true;
      }
    }
  }
}

function play(play_col, marker) {
  for (const row of grid.reverse()) {
    if (is_available(row, play_col - 1)) {
      row[play_col - 1] = marker;
      checkplay(marker);

      if (marker === 'o') {
        marker = 'x';
      } else {
        marker = 'o';
      }

      grid = grid.reverse();
      console.log(grid);

      return marker;
    }
  }
  return marker;
}

function is_available(row, play_col) {
  if (row[play_col] === '.') {
    return true;
  }
  return false;
}

for (let i = 0; i < 20; i++) {
  //while (true) {
  let play_col = prompt('Column 1 to 7 ');
  play_col = Number(play_col);
  if (0 < play_col && play_col < 7) {
    marker = play(play_col, marker);
  }
}
