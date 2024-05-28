let msg = 'Global';
function outer() {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    let msg = 'Block';
    console.log(msg);
  }
}
outer();

// const 함수에 대한 내용.
const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1);
// const는 속성값이 변경 가능하다.
const p2 = { name: 'john', age: 20 };
p1 = { name: 'sujan', age: 20 };
console.log(p2);

function addCotact(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  let str = `name =${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;
  console.log(str);
}
// 함수 호출시 인수를 생략했을 때 가지는 기본 값을 지정
// 반드시 뒤부분에 해야함. 중간은 불가능
addCotact('홍길동', '010-5544-1122');
addCotact('이몽룡', '010-5577-2155', '032-836-1230', '서울시');

function foodReport(name, age, ...favoriteFoods) {
  console.log(name + ',' + age);
  console.log(favoriteFoods);
}
// ...을 통해 파라미터의 개수를 가변적으로 적용
foodReport('이민규', 27, '짜장면', '탕수육', '치킨');
foodReport('이상엽', 34, '초빕');

// 구조분해 할당
let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

let p1 = { name: '홍길동', age: 20, gender: 'M' };
let { name: n, age: a, gender } = p1;
console.log(n, a, gender);

function addContact1({ name, phone, email = '없음', age = 0 }) {
  console.log(name, phone, email, age);
}
addContact1({ name: '이몽룡', phone: '010-3434-8989' });

function addContact2(contact) {
  if (!contact.email) contact.email = '없음';
  if (!contact.age) contact.age = 0;
  let { name, phone, email, age } = contact;
  console.log(name, phone, email, age);
}
addContact2({ name: '이몽룡', phone: '001-4214-4214' });

function addContact3(name, phone, email = '없음', age = 0) {
  console.log(name, phone, email, age);
}
addContact3('이춘향', '010-6647-2180');

const test1 = function (a, b) {
  return a + b;
};
const test2 = (a, b) => {
  return a + b;
};
const test3 = (a, b) => a + b;
// 다음 방식으로 생략이 가능하다. 한줄의 경우 return도 생략가능
console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));

// --------------------02, this부터 추가 필요 (0528)--------------------
