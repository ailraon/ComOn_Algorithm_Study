const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let lottoCombinations;
const makeLottoCombinations = (amountToPick, elementsToPick, lotto) => {
  if (amountToPick === 0) {
    lottoCombinations.push(lotto);
    return;
  }

  let pickEndIdx = elementsToPick.length - amountToPick;
  for (let i = 0; i <= pickEndIdx; i++) {
    makeLottoCombinations(amountToPick - 1,
      elementsToPick.slice(i + 1),
      `${lotto}${elementsToPick[i]} `
    );
  }
}

let line;
while ((line = input()) !== "0") {
  const [elementSize, ...elementsToPick] = line.split(" ").map(Number);

  lottoCombinations = [];
  makeLottoCombinations(6, elementsToPick, "");

  console.log(lottoCombinations.join("\n") + "\n");
}

// 굳!
