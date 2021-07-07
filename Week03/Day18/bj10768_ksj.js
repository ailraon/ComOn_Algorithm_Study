const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let month = parseInt(input());
let day = parseInt(input());

if(month == 1 && day <= 31) {
    console.log("Before");
}

else if(month == 2 && day < 18){
    console.log("Before");
}

else if(month == 2 && day == 18){
    console.log("Special");
}

else {
    console.log("After");
}