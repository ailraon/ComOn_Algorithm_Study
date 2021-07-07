const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let bin = "0b" + input();
console.log((BigInt(bin)*17n).toString(2));

