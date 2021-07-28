const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let len = Number(input());

//// console.log / process.stdout.write / System.out.print print 등등 이런 출력함수는
//// 실행 시간을 단축하려면 한번만 쓰는게 좋아
//// 왜냐면 한번 호출할 때마다 시간이 꽤 걸리거든

//// 어떻게 한번만 쓰냐?
//// let result = []; 빈 배열을 하나 두고
//// 결과값을 result.push(" ") 푸쉬해
//// 그리고 마지막에 console.log(result.join("")) 하면 push 했던 값들이 전부 붙어

//// result = "" 빈 문자열 담아놓고
//// result += "*" 이렇게 붙이는것도 나쁘지 않아

//// 앞으로는 출력함수는 한번만 사용하기 바람!
for(let i = 0; i<len; i++){
    for(let j=0; j<2*len-(i+1); j++) {
        if(j < i){
            process.stdout.write(" ");
        }
        else {
            process.stdout.write("*");
        }
    }
    console.log("");
}