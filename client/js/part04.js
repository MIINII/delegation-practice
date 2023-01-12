const contents = getNode('.contents');
const textField = getNode('#comment37');

function handler(e) {
  let target = e.target;

  // 좋아용 내에 자식들(dataName이 없는) 클릭햇을때에도 작동되게
  while (!attr(target, 'data-name')) {
    target = target.parentNode;

    if (target.nodeName === 'BODY') {
      target = null;
      return;
    }
  }

  if (target.dataset.name === 'like') {
    console.log('like!');
    toggleClass(target, 'active');
  }

  if (target.dataset.name === 'comment') {
    textField.focus();
  }

  if (target.dataset.name === 'send') {
    //입력한 내용을 댓글 목록에 띄우기
    let template = /*html */ `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">신섬범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `;

    insertLast('.comment_container', template);

    textField.value = '';
  }
}

contents.addEventListener('click', handler);
