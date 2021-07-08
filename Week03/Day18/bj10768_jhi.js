const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let month = input();
let day = input();

console.log(Number(month) > 2 ? "After" : 
            Number(month) < 2 ? "Before" : 
            Number(day) > 18 ? "After" : 
            Number(day) < 18 ? "Before" : "Special");