const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const now = input().split(" ");

let time = {
    hour : parseInt(now[0]),
    minute : parseInt(now[1]) + parseInt(input())
};

if(time.minute >= 60) {
    time.hour = (time.hour + parseInt(time.minute/60)) % 24;
    time.minute = time.minute%60;
}

console.log(time.hour + " " + time.minute);