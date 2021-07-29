const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let len = Number(input());

for(let i = 0; i<len; i++){
    let result = [];
    for(let j=0; j<2*len-(i+1); j++) {
        if(j < i){
            result.push(" ");
        }
        else {
            result.push("*");
        }
    }
    console.log(result.join(""));
}