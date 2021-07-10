const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let month = parseInt(input());
let day = parseInt(input());

//// 조건을 조금 수정하면 더 좋을 것 같습니다.

if (month == 2 && day == 18) {
  console.log("Special");
} 
else if (month == 2 && day < 18) {
    console.log("Before");
  } 
else if (month < 2){
    console.log("Before");
}
else {
  console.log("After");
}  

// 조건에 맞춰 if문을 쓴 건 좋았지만, 조건문을 조금만 수정하면 if문이 더 적어질 것 같습니다.
