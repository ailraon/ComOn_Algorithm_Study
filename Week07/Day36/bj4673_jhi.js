let allNumber = new Array(10000);
for(let i = 0; i < allNumber.length; i++) {
  allNumber[i] = i+1;
}

//// 문제를 풀어보지 않은 사람이 코드를 보면서 변수명/함수명만으로도 어느정도 짐작하면서 읽을 수 있게끔 한다는 생각으로 다시 해봐.
//// 의도를 전달하기 위해서라면 변수명, 함수명을 꽤 길게 지어도 돼!

//// 전체적으로 이해하는데 난해한 코드였어
  //// allNumber라는 1만개 배열에다가 갑자기 1~10000을 담는데 allNumber? 모든 숫자? 무슨 모든 숫자?
  //// sequenceNumber라는데 수열숫자? 셀프넘버를 말하는건가? 뭐를 말하는거지?
    //// 아까 1~10000 초기화한 allNumber 배열로 만드네? 왜지?
  //// selfNumber는 마지막에 console.log 하는거니까 결과값 반환일거고
  //// inNumber? 무슨 숫자 안에 있다는거지?
    //// num이 sequenceNumber안에 안에 있는지를 반환하는거구나
    //// 그럼 sequenceNumber라는게 셀프넘버들을 저장하는 곳인가보네
      //// 그니까 1~10000 일단 초기화하고
      //// 그걸 각각 자릿수만큼 d(n)해서 값을 바꾸면
      //// 생성자 1~10000에 대한 d(n)이 나오는거고
        //// allNumber가 뭔가했더니 생성자였네
      //// 그 안에 없으면 셀프넘버로 보려고 하는거구나
      //// 휴 이제 이해됐네.


let sequenceNumber = Array.from(allNumber, x => makeSequence(x));
let selfNumber = '';

for(let i = 0; i < 10000; i++) {
  if(!(inNumber(Number(allNumber[i]), sequenceNumber))) {
    selfNumber += String(allNumber[i]) + '\n';
  }
}

console.log(selfNumber);

function makeSequence (num) {
  let result = Number(num);
  let digit = String(num);
  for(let i = 0; i < digit.length; i++) {
    result += Number(digit.charAt(i));
  }
  return result;
}

//// Javascript Array의 includes 함수로 대체 가능
//// 자주 쓰일 것 같은건 다 기본 사양에 있으니까 따로 함수 만들기 전에 구글링 해봐!
function inNumber (num, sequenceNumber) {
  for(let i = parseInt(num / 2) - 1; i <= num; i++) {
    if(num === sequenceNumber[i]) return true;
  }
  return false;
}