const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let totalNumberOfCards = input();
let numberOfCardesToChoose = input();

const cards = [];

for (let i = 0; i < totalNumberOfCards; i++) {
	cards.push(input());
}

let totalNumberOfCardCombinations = new Array(0);
getNumberOfCardCombinations(numberOfCardesToChoose, '', cards);
console.log(totalNumberOfCardCombinations.length);

function getNumberOfCardCombinations (numberOfCardToChoose, cardCombinations, cards) {
	if (numberOfCardToChoose === 0) {
		if (!totalNumberOfCardCombinations.includes(cardCombinations)) {
			return totalNumberOfCardCombinations.push(cardCombinations);
		}
		return;
	}

	for (let i = cards.length - 1; i >= 0; i--) {
		let cardsPop = cards.pop();
		getNumberOfCardCombinations(numberOfCardToChoose - 1, String(cardCombinations + cardsPop), cards);
		cards.push(cardsPop);
	}
}