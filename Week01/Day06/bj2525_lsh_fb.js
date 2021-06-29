const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const time = input().split(" ");
const sum = parseInt(input());

let hour = parseInt(time[0]);
let min = parseInt(time[1]);

min += sum;

while (min >= 60) {
  min -= 60;
  hour++;
}

while (hour >= 24) {
  hour -= 24;
}

console.log(hour + " " + min);
