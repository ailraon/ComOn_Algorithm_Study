const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let prize = parseInt(input());
let one = prize - (prize*0.22);
let two = (prize - ((prize*0.2)*0.22));

//// 팁: 템플릿 리터럴을 사용하면 console.log(`${one} ${two}`); 요렇게 쓸 수도 있습니다
console.log(one + ' ' + two);

//// 깔끔합니다
//// 보기 편하네요