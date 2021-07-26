const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while(true) {
	let [x, y, z] = input()
                            .split(' ')
                            .map(Number);
                            
    if(x === 0 && y === 0 && z === 0) break;
    
    if(z * z === (y * y + x * x) || x * x === (z * z + y * y) || y * y === (z * z + x * x)){
    	console.log("right");
    }
    else {
    	console.log("wrong");
    }
    
}
