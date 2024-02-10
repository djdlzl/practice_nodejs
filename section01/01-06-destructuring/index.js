// 구조분해할당 예제
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

const { name, school } = profile;
console.log(name);
console.log(school);

//1. 변수 전달하기
function zzz(aaa) {
  console.log(aaa);
}

zzz("사과");

// 2. 객체 전달하기
function xxx(aaa) {
  // const aaa = basket
  console.log(aaa);
}
const basket = {
  apple: 3,
  banana: 5,
};

xxx(basket);

// 3. 구조분해할당 방식으로 객체 전달하기
function ccc({ apple, banana }) {
  // const {apple, banana} = basket2
  console.log(apple);
}
const basket2 = {
  apple: 3,
  banana: 5,
};

ccc(basket2);
