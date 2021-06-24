process.stdin.resume();
process.stdin.setEncoding("utf8");

const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let num = parseInt(input());

for (let i = 1; i <= num; i++) {
  for (let j = 0; j < num; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
