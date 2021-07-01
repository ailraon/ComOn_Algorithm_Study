const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let totalSecond = 0;

for (let i = 0; i < 4; i++) {
  totalSecond += parseInt(input());
}

let time = {
  minute: parseInt(totalSecond / 60),
  second: totalSecond % 60,
};

console.log(time.minute);
console.log(time.second);

<<<<<<< HEAD
//// 깔끔합니다. :22 :33
=======
//// 깔끔합니다.
>>>>>>> 8428ca43f38f64b7f00f9f465e5283f997fd0253
