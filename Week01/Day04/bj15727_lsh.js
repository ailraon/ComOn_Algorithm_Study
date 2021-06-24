const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const len = input();
const time = parseInt(Math.ceil(len / 5));

console.log(time);
