const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 50512ace90790ea0e9880a0dd8b7a292' };

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url} target="_blank">${doc.contents}</a></li>`;
  });
  $result.innerHTML = `<ul class="lsit-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}

function error() {
  alert('에러 발생.');
}

function search() {
  const { value } = $text;

  if (value === '') {
    alert('검색어 입력');
    return false;
  }

  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);

  return true;
}

$btn.addEventListener('click', search);