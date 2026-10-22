// 쇼핑몰 화면을 흉내 내는 껍데기입니다. 강의 주제는 서비스 구현이 아니라 개발자 포털입니다.
const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>쇼핑몰</h1><p>상품 목록 자리</p>');
  })
  .listen(3001, () => console.log('shop-web on :3001'));
