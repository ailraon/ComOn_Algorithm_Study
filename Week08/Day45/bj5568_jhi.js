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

//// new Array안하고 그냥 []해도 됨
//// js에서 편하게 쓰라고 짧게도 쓸 수 있게 했는데 귀찮게 new Array 다 칠 필요 없음
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

//// 이제 이 유형은 어느정도 잘 풀듯