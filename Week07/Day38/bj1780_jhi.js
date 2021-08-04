const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

paperSize = Number(input());
paperContent = new Array(paperSize);

paperWithMinus = 0;
paperWithZero = 0;
paperWithOne = 0;
result = '';

for (let i = 0; i < paperSize; i++) {
    paperContent[i] = input().split(' ');
}
countPaper(0, 0, paperSize, paperSize);

result = paperWithMinus + '\n' + paperWithZero + '\n' + paperWithOne;
console.log(result);


function countPaper (startLength, startWidth, endLength, endWidth) {
    if (isEquals(startLength, startWidth, endLength, endWidth)) {
        let paperContentPiece = paperContent[startLength][startWidth];
        if (paperContentPiece === '-1') {
            return paperWithMinus++;
        } else if (paperContentPiece === '0') {
            return paperWithZero++;
        } else {
            return paperWithOne++;
        }
    }

    let threePartsLength = (endLength - startLength) / 3;

    for (let i = startLength; i < endLength; i += threePartsLength) {
        for (let j = startWidth; j < endWidth; j += threePartsLength) {
            countPaper(i, j, i+threePartsLength, j+threePartsLength);
        }
    }
}

function isEquals (startLength, startWidth, endLength, endWidth) {
    let paperContentPiece = paperContent[startLength][startWidth];
    for (let i = startLength; i < endLength; i++) {
        for (let j = startWidth; j < endWidth; j++) {
            if (paperContentPiece !== paperContent[i][j]) return false;
        }
    }
    return true;
}

