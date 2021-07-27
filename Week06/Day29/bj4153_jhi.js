const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();


while(true) { 
    let [rt1, rt2, rt3] = input().split(' ').map((num) => parseInt(num));
    if(rt1 === 0 && rt2 === 0 && rt3 === 0) {
        break;
    }
    if((rt1 * rt1 === (rt2 * rt2 + rt3 * rt3) ||
     rt2 * rt2 === (rt1 * rt1 + rt3 * rt3) ||
      rt3 * rt3 === (rt2 * rt2 + rt1 * rt1))) {
        console.log("right");
    } else {
        console.log("wrong");
    }
}
//// 깔끔합니다 :22