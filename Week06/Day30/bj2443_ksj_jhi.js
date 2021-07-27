const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let len = Number(input());

for(let i = 0; i<len; i++){
    for(let j=0; j<2*len-(i+1); j++) {
        if(j < i){
            process.stdout.write(" ");
        }
        else {
            process.stdout.write("*");
        }
    }
    console.log("");
}