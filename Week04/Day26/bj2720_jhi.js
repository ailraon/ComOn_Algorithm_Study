const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const Quarter = 25;
const Dime = 10;
const Nickel = 5;
const Penny = 1;

let change = 0;
let times = Number(input());

for(let i = 0; i < times; i++) {
    change = Number(input());
    changeMoney(change);
}

function changeMoney(change) {
    let divisionQuarter = parseInt(change / Quarter);
    let divisionChange = change % Quarter;
    let divisionDime = parseInt(divisionChange / Dime);
    divisionChange = divisionChange % Dime;
    let divisionNickel = parseInt(divisionChange / Nickel);
    divisionChange = divisionChange % Nickel;
    let divisionPenny = parseInt(divisionChange / Penny);
    console.log(`${divisionQuarter} ${divisionDime} ${divisionNickel} ${divisionPenny}`);
}

