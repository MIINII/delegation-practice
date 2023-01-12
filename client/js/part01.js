const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

// 내비게이션에게 이벤트를 건다
const navigation = getNode('.navigation');

// 유사배열을 배열로 만들어주는 함수
function makeArr(arrayLike) {
  return Array.from(arrayLike);
}

const handler = (e) => {
  // 이벤트 객체에서 타겟을 찾는다
  let target = e.target.closest('li');
  if (!target) return;

  let list = makeArr(navigation.children);
  let index = attr(target, 'data-index');

  // 비주얼 안에 있는 이미지를 가져온다
  let visualImg = getNode('.visual img');

  // 내가 선택하지 않은(모든) li에게 is-active 클래스를 넣기
  list.forEach((item) => {
    removeClass(item, 'is-active');
  });

  // 이미지의 src 속성에 접근한다
  // console.log(attr(visualImg, 'src'));

  // src의 값을 index로 바꾼다
  attr(visualImg, 'src', `./assets/part01/visual${index}.jpg`);
  attr(visualImg, 'alt', data[index - 1].alt);

  // 내가 선택한 li에게 is-active 클래스를 넣기
  addClass(target, 'is-active');
};

// 핸들러를 연결한다
navigation.addEventListener('click', handler);
