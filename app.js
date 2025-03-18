// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 라우팅 설정
app.get('/', (req, res) => {
  // 클라이언트에게 응답 내용 전송
  res.send('Hello, World!');
});

// 서버가 3000번 포트에서 요청을 기다리도록 설정
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
