// const { createCanvas, loadImage } = require('canvas');
// import {createCanvas} from 'canvas';?
let rows;
let cols;
let grid;
let resolution = 10;

function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(600, 400);
  cols = width / resolution;
  rows = height / resolution;
  grid = make2Darray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * Math.floor(2));
    }
  }
  // console.log(grid);
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {

        fill(255);
        stroke(0)
        rect(x, y, resolution-1, resolution-1);
      }
    }
  }
}
