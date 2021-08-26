const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [, REQUIRED_TREE_LENGTH] = input().split(' ').map(Number);
const treeLengths = input().split(' ').map(Number);

const calcLeftTreeLength = (cutHeight) => {
  let leftTreeLength = 0;
  for (let treeLength of treeLengths) {
    leftTreeLength += treeLength - Math.min(cutHeight, treeLength);
  }
  return leftTreeLength;
}

//// while로 풀어보세요 (정 모르겠으면 다른 사람 답안 봐도 됨)
const getHighestCutHeight = () => {
  let highestTreeLength = treeLengths.reduce((previous, current) => { 
    return (previous > current) ? previous : current;
  });

  let max = highestTreeLength;
  let min = 0;

  let current;
  while (min <= max) {
    current = parseInt((max + min) / 2);

    let leftTreeLength = calcLeftTreeLength(current);
    if (leftTreeLength == REQUIRED_TREE_LENGTH) {
      return current;
    } else if (leftTreeLength > REQUIRED_TREE_LENGTH) {
      min = current + 1;
    } else if (leftTreeLength < REQUIRED_TREE_LENGTH) {
      max = current - 1;
    }
  }
  return max;
}

console.log(getHighestCutHeight());
