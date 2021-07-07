const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let len = parseInt(input());

for (let i = 0; i < len; i++) {
  let num = parseFloat(input());
  console.log("$" + (num * 0.8).toFixed(2));
}

//// 군더더기 하나 없이 깔끔합니다! :22