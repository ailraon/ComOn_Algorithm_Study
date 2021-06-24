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

//// 변수명 distance을 dist로 표현하신 거 같은데 조금 더 줄여진 표현이 깔끔해 보이고 좋아요.