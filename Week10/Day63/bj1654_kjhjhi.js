const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const getMaxCutLength = (lans, goalLanAmount) => {
  let min = 0;
  let max = lans.reduce((previous, current) => { 
    return (previous > current) ? previous : current;
  });
  
  while (min <= max) {
    let middle = parseInt((min + max) / 2);
    let lanAmount = getLanAmountAfterCut(lans, middle);

    if (lanAmount < goalLanAmount) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  let lanAmount = getLanAmountAfterCut(lans, max);
  if (lanAmount < goalLanAmount) {
    return max - 1;
  }

  return max;
}

const getLanAmountAfterCut = (lans, cutLength) => {
  let lanAmount = 0;
  for (currentLan of currentLans) {
    lanAmount += parseInt(currentLan / cutLength);
  }
  return lanAmount;
}

const [CURRENT_LAN_AMOUNT, GOAL_LAN_AMOUNT] = input().split(' ').map(i=>parseInt(i));

const currentLans = [];
for (let i = 0; i < CURRENT_LAN_AMOUNT; i++) {
  currentLans.push(parseInt(input()));
}

console.log(getMaxCutLength(currentLans, GOAL_LAN_AMOUNT));
