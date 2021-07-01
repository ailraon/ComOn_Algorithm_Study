const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

<<<<<<< HEAD
//// 신경 쓴 변수명 굳굳 : 22
=======
>>>>>>> 8428ca43f38f64b7f00f9f465e5283f997fd0253
let homeToschool = parseInt(input());
let schoolToPC = parseInt(input());
let PCToacademy = parseInt(input());
let academyTohome = parseInt(input());

//// 지금도 너무 좋지만 반복문을 사용하시면 더 좋을 것 같습니다.

let sum = homeToschool + schoolToPC + PCToacademy + academyTohome;

let min = parseInt(sum / 60);
let sec = parseInt(sum % 60);

console.log(min);
console.log(sec);
