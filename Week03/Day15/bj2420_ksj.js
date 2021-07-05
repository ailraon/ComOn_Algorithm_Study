const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let domain = parseInt(input().split(" "));
let firstDomain = domain[0];
let secondDomain = domain[1];
let result = Math.abs(domain[0] - domain[1]);

console.log(result);