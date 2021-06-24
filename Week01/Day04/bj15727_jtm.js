// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let dist = input();

if(dist % 5 == 0){
    console.log(parseInt((dist / 5)));
}

else{
    console.log(parseInt(dist / 5) + 1);
}