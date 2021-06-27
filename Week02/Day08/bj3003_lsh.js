const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const chess = input().split(" ");

let king = 1 - parseInt(chess[0]);
let queen = 1 - parseInt(chess[1]);
let look = 2 - parseInt(chess[2]);
let bishop = 2 - parseInt(chess[3]);
let night = 2 - parseInt(chess[4]);
let phone = 8 - parseInt(chess[5]);

console.log(
  king + " " + queen + " " + look + " " + bishop + " " + night + " " + phone
);
