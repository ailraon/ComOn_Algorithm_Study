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
////넘버 함수 사용법에 대해 알게되었습니다. => 함수가 아닌 객체입니다! :22 저도 알아갑니다!
//// 저도 알게 되었습니다!
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

//// 깔끔합니다!