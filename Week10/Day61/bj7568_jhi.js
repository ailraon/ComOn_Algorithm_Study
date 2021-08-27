const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let numberOfPeople = input();
let peopleHeight = [];
let peopleWeight = [];
let sizeRanking = "";

for (let i = 0; i < numberOfPeople; i++) {
    let [weight, height] = input().split(" ").map(Number);
    peopleWeight.push(weight);
    peopleHeight.push(height);
}

for (let i = 0; i < numberOfPeople; i++) {
    let rank = 1;
    for (let j = 0; j < numberOfPeople; j++) {
        if (peopleWeight[i] < peopleWeight[j] && peopleHeight[i] < peopleHeight[j]) {
            rank++;
        }
    }
    sizeRanking += rank + " ";
}

console.log(sizeRanking);