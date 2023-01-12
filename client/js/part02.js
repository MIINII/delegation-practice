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

// 이벤트 위임x
/* $('.navigation > li ').click(function (e) {
  e.preventDefault();
  //더이상 태그가 자신의 일을 하지 않음.
  //a태그가 이걸 적용받는 순간 어디로 넘기지 않음.
  //자신의 기능을 상실함.
  // -> a태그의 이동을 일단 막음.

  // console.log($(this));
  // > E.fn.init [li]

  //여기서 index값을 가져오려면
  let index = $(this).index();

  $('.navigation > li ').removeClass('is-active');

  $(this).addClass('is-active');

  $('.visul img').attr({
    src: `./assets/part01/${data[index].src}`,
    alt: data[index].alt,
  });
}); */

$('.navigation').on('click', 'li', function (e) {
  e.preventDefault();
  console.log(this).attr('data-index');

  $('navigation > li ').removeClasee('is-active');
  $(this)
    .addClass('is-active')('.visual img')
    .attr({
      src: `./assets/part01/${data[index].src}`,
      alt: data[index].alt,
    });
});
