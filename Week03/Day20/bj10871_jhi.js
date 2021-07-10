const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let condition = input().split(" ");

let numbers = input().split(" ");
let result = "";

for(let i = 0; i < condition[0]; i++) {
    if(Number(condition[1]) > Number(numbers[i])) {
        result += numbers[i] + " ";
    }
}
console.log(result);