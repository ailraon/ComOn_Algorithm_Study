const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let prize = parseInt(input());
let one = prize - (prize*0.22);
let two = (prize - ((prize*0.2)*0.22));

console.log(one + ' ' + two);