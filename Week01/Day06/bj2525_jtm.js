const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const clock = input().split(" ");
let hour = parseInt(clock[0]);
let min = parseInt(clock[1]);
let time = parseInt(input());

hour = hour + parseInt(time/60);
//// 어느 줄은 % 주위에 공백이 있고, 15줄의 % 주위엔 없는데 통일성 있게 했으면 더 읽기 좋았을 것 같아요!
min = min + time%60;

if(min >= 60){
    hour ++;
    min = min % 60;
}
if(hour >= 24){
    hour = hour % 24;
}

console.log(hour + ' ' + min);

//// 깔끔합니다!