const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let nthLine = input();

let pyramidStar = [];
for (let i = 0; i < nthLine; i++) {
    pyramidStar[i] = "";
}
makePyramid(nthLine, 0);

let result = "";
let index = 0;
for (let i = nthLine - 1; i >= 0 ; i--) {
    result += " ".repeat(i);
    result += pyramidStar[index];
    result += " ".repeat(i);
    result += "\n";
    index++;
}

console.log(result);

function makePyramid (nthLine, startRow) {
    if (nthLine == 3) return drawTriangle(startRow);

    makePyramid(nthLine / 2, startRow);
    makePyramid(nthLine / 2, startRow + nthLine / 2);
    drawEmptyTriangle(nthLine / 2, startRow + nthLine / 2);
    makePyramid(nthLine / 2, startRow + nthLine / 2);
}

function drawTriangle (startRow) {
    pyramidStar[startRow] += "*";
    pyramidStar[startRow + 1] += "* *";
    pyramidStar[startRow + 2] += "*****";
}

function drawEmptyTriangle (nthLine, startRow) {
    let emptySpace = nthLine * 2 - 1;
    for (let i = nthLine; i < nthLine * 2; i++) {
        pyramidStar[startRow++] += " ".repeat(emptySpace);
        emptySpace -= 2;
    }
}