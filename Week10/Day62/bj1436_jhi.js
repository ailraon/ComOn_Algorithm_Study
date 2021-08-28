const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let numberOfNthEndings = input();

let numberOfEnding = "666";
let countingEnding = 0;
while (true) {
    if (String(numberOfEnding).includes("666")) {
        countingEnding++;
    }
    if (numberOfNthEndings == countingEnding) {
        break;
    }
    numberOfEnding++;
}

console.log(numberOfEnding);