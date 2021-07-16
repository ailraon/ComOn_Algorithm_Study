const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let cnt = parseInt(input());

for(let i=0; i<cnt; i++){
    let change = parseInt(input());
    
    let quarter = Math.floor(change/25);
    let dime = Math.floor((change%25)/10);
    let nickel = Math.floor((change%25%10)/5);
    let penny = Math.floor(change%25%10%5);
    
	console.log(`${quarter} ${dime} ${nickel} ${penny}`);
}
