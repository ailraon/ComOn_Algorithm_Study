const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let inputNum = input();
let count = 0;

while(true) {
    if(Number(inputNum) < 10)
        break;
    inputNum = convertToMultiples(inputNum);
    count++;
}

console.log(count);
if(inputNum%3===0) {
    console.log("YES");
} else {
    console.log("NO");
}

function convertToMultiples(inputNum) {
    let sumNum = 0;
    for(let i = 0; i < inputNum.length; i++) {
        sumNum += Number(inputNum.charAt(i));
    }
    return String(sumNum);
}