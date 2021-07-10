const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let month = parseInt(input());
let day = parseInt(input());

//// 31일보다 큰 day는 없습니다!
if (month == 1 && day <= 31) {
  console.log("Before");
}
//// 조건을 조금 수정하면 더 좋을 것 같습니다.
else if (month == 2 && day < 18) {
  console.log("Before");
} else if (month == 2 && day == 18) {
  console.log("Special");
} else {
  console.log("After");
}

// 조건에 맞춰 if문을 쓴 건 좋았지만, 조건문을 조금만 수정하면 if문이 더 적어질 것 같습니다.
