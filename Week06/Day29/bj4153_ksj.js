const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while(true) {
	let [x, y, z] = input()
                            .split(' ') //// 엔터탭 할땐 이전 줄 탭 +1칸으로 하는게 일반적이에요! (즉 탭 2칸)
                            .map(Number); //// 여기도
                            
    //// 9줄에선 탭 1칸이였는데 여기서부터 2칸으로 갑자기 늘어버렸어요
    if(x === 0 && y === 0 && z === 0) break;
    if(z * z === (y * y + x * x) || x * x === (z * z + y * y) || y * y === (z * z + x * x)){
    	console.log("right");
    }
    else {
    	console.log("wrong");
    }
    
}
//// 잘했습니다. 한번 함수로 작성해보는 것도 괜찮을 거 같습니다.
//// 깔끔합니다
