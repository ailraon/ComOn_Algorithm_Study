// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let distance = input();

if(distance%5 > 0 && distance%5 <= 5){
    console.log(parseInt((distance / 5) + 1));
}

else{
    console.log(parseInt(distance / 5));
}