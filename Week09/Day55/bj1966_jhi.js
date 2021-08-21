const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let testCaseNum = input();
let result = "";

for(let i = 0; i < testCaseNum; i++) {
  let [documentNum, queueIndex] = input().split(" ").map(Number);
  let documentImportant = input().split(" ").map(Number);
  result += findPrintQueueOrder(queueIndex, documentImportant) + '\n';
}

console.log(result);

function findPrintQueueOrder (queueIndex, documentImportant) {
  let printOrder = 1;
  while (documentImportant.length !== 0) {
    if (isOrderImportant(0, documentImportant)) {
      if (queueIndex === 0) {
        queueIndex = documentImportant.length - 1;
      } else {
        queueIndex--;
      }
      documentImportant.push(documentImportant.shift());
      continue;
    }
    if (queueIndex === 0) {
      return printOrder;
    }
    documentImportant.shift();
    printOrder++;
    queueIndex--;
  }
}

function isOrderImportant (orderNum, documentImportant) {
  for (let i = 0; i < documentImportant.length; i++) {
    if (documentImportant[i] > documentImportant[orderNum]) return true;
  }
  return false;
}