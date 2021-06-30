const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let homeToschool = parseInt(input());
let schoolToPC = parseInt(input());
let PCToacademy = parseInt(input());
let academyTohome = parseInt(input());

let sum = homeToschool + schoolToPC + PCToacademy + academyTohome;

let min = parseInt(sum / 60);
let sec = parseInt(sum % 60);

console.log(min);
console.log(sec);