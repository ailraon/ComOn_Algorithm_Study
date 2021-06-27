const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const now = input().split(" ");

//// 객체 활용 좋네요! :22
let time = {
    hour : parseInt(now[0]),
    minute : parseInt(now[1]) + parseInt(input())
};

if(time.minute >= 60) {
    time.hour = (time.hour + parseInt(time.minute/60)) % 24;
    //// 윗 줄은 % 주위에 공백이 있고, 밑줄엔 없는데 통일성 있게 했으면 더 읽기 좋았을 것 같아요!
    time.minute = time.minute%60;
}

////완벽한거같아요 한수 배워갑니다.

console.log(time.hour + " " + time.minute);