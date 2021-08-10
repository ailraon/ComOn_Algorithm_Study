const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [N, K] = input().split(' ');
let NUMBER_LIMIT = parseInt(N);
let DIGIT_LIMIT = N.length;

let usableNumbers = input().split(' ');

const getMaxNumInLimit = (numbersToAdd, strNumber) => {
  if (numbersToAdd == 0) return parseInt(strNumber);
  
  let maxNumInLimit = 0;
  for (let i = 0; i < usableNumbers.length; i++) {
    let returned = getMaxNumInLimit(numbersToAdd - 1, strNumber + usableNumbers[i]);
    if (returned > NUMBER_LIMIT) returned = parseInt(returned / 10);

    maxNumInLimit = Math.max(maxNumInLimit, returned);
  }

  return maxNumInLimit;
}

console.log(getMaxNumInLimit(DIGIT_LIMIT, ''));