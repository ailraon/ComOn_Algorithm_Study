const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let testCase = Number(input());

for(let i = 0; i < testCase; i++) {
    let recoding = input().split(' ');
    let result = '';
    while(true) {
      let animals = input();
      if(animals === "what does the fox say?") break;
      animals = animals.split(' ');
      for(let j = 0; j < recoding.length; j++) {
        if(animals[2] === recoding[j]) {
          recoding[j] = '';
        }
      }
    }
    for(let j = 0; j < recoding.length; j++) {
      if(recoding[j] !== '') 
        result += (recoding[j] + ' ');
    }
    console.log(result);
}