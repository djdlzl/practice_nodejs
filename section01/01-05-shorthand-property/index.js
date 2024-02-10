function qqq(aaa) {
  console.log(aaa);
  console.log(aaa.name);
  console.log(aaa.age);
  console.log(aaa.school);
}

const name = "철수";
const age = 12;
const school = "다람쥐초등학교";

const profile2 = {
  name: name,
  age: age,
  school: school,
};
const profile = { name, age, school };

localStorage.setItem(profile);

qqq(profile); // 1. 변수에 담아서 보내주기
qqq({ name, age, school }); // 2. 그냥 통째로 보내기
// => 1,2 결과는 동일함
