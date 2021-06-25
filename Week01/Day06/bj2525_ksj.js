const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let currentTime = input().split(" ");
let cookTime = input();

let currentHour = currentTime[0];
let currentMinute= currentTime[1];

let resultHour = Number(currentHour);
let resultMinute = Number(currentMinute) + Number(cookTime);

while(resultMinute >= 60){
  resultMinute -= 60;
  resultHour += 1;
}

while(resultHour >= 24){
  resultHour -= 24;
}

process.stdout.write(resultHour + ' ' + resultMinute);
