// express 모듈을 가져옵니다.
const express = require('express');

// express 애플리케이션을 만듭니다.
const app = express();

app.use(express.json());

// '/' 경로에 대해 요청을 처리합니다.
app.post('/a', (req, res) => {
  // 응답 본문
  res.send(req.body); 
});

// 서버가 3000번 포트에서 대기하도록 설정
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 대기 중입니다.');
});
5